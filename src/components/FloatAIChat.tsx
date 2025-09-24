import { useEffect, useRef, useState } from "react";
import { Play, Pause, SendHorizonal, Speech, SquareMinus } from "lucide-react";
import { createPortal } from "react-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcn/popover";
import { ScrollArea } from "./shadcn/scroll-area";
import ReactMarkdown from 'react-markdown'
import { Textarea } from "./shadcn/textarea";
import { clsx } from "clsx";
import { useAiChatMutation } from "../hooks/useGoogleAI";

export interface ChatMessage {
  isBot: boolean;
  msg: string;
  sentAt: Date;
}

export default function FloatAIChat() {
  const [animate, setAnimate] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [chatHistory, setChatHistory] = useState(() => {
    const chatHistoryStr = sessionStorage.getItem("chatHistory");
    return chatHistoryStr ? JSON.parse(chatHistoryStr) as ChatMessage[] : [] as ChatMessage[];
  });

  const [userMsg, setUserMsg] = useState("")

  const viewportRef = useRef(null);

  // Speech synthesis state
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Cleanup any speaking on unmount
  useEffect(() => {
    return () => {
      try {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
      } catch {
        // ignore cleanup errors
      }
    };
  }, []);

  function getVietnameseVoice(): SpeechSynthesisVoice | null {
    if (!(typeof window !== "undefined" && "speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    const viCandidates = voices.filter(v => v.lang?.toLowerCase().startsWith("vi"));
    if (viCandidates.length > 0) return viCandidates[0];
    return null;
  };

  const speakText = (index: number, text: string) => {
    if (!(typeof window !== "undefined" && "speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance === "undefined") {
      alert("Trình duyệt của bạn không hỗ trợ đọc văn bản.");
      return;
    }

    const synth = window.speechSynthesis;

    // If clicking same bubble, toggle using our own state for reliability
    if (speakingIndex === index) {
      if (isPaused) {
        try { synth.resume(); } catch { /* ignore */ }
        setIsPaused(false);
        setTimeout(() => {
          if (synth.paused) {
            try { synth.resume(); } catch { /* ignore */ }
          }
        }, 0);
      } else {
        try { synth.pause(); } catch { /* ignore */ }
        setIsPaused(true);
      }
      return;
    }

    // If switching to another bubble, stop previous
    if (synth.speaking || synth.paused) {
      synth.cancel();
    }

    const voice = getVietnameseVoice();
    if (!voice) {
      alert("Trình duyệt của bạn không hỗ trợ đọc văn bản.");
      return;
    }
    const ut = new SpeechSynthesisUtterance(text);
    ut.voice = voice;
    ut.lang = voice?.lang ?? "vi-VN";
    ut.rate = 1;
    ut.onpause = () => setIsPaused(true);
    ut.onresume = () => setIsPaused(false);
    ut.onend = () => {
      setSpeakingIndex(null);
      setIsPaused(false);
      utteranceRef.current = null;
    };
    utteranceRef.current = ut;
    setSpeakingIndex(index);
    setIsPaused(false);
    synth.speak(ut);
  };

  useEffect(() => {
    const chatHistoryStr = JSON.stringify(chatHistory);
    sessionStorage.setItem("chatHistory", chatHistoryStr);
  }, [chatHistory])

  useEffect(() => {
    if (viewportRef.current) {
      const scrollArea = viewportRef.current as HTMLDivElement;
      scrollArea.scroll({ top: scrollArea.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  const aiChat = useAiChatMutation();

  return createPortal(
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <button title="Chat với mình đi"
          onClick={() => { setAnimate(false); setIsOpen(!isOpen) }}
          className={clsx(`flex flex-col justify-center items-center fixed bottom-4 right-4 cursor-pointer border-2 border-amber-400
          rounded-2xl bg-gray-200/50 p-1 hover:bg-red-500 z-[9999]`,
            animate && "animate-bounce")}
        >
          <img src="/imgs/avatar/vietnamball.png"
            className="size-10" />
        </button>
      </PopoverTrigger>

      <PopoverContent side="left" align="end"
        className={clsx(
          "w-100 h-160 grid grid-rows-[auto_1fr_auto] p-0 border-0",
          "transition-all duration-300 ease-out",
          "data-[state=open]:animate-popover-in",
          "data-[state=closed]:animate-popover-out"
        )}>

        <div className="flex justify-between items-center bg-yellow-500 rounded-t-md p-2">
          <div className="flex gap-4 justify-between items-center w-fit">
            <h3 className="text-xl font-semibold text-white">DoanKetBot</h3>
            <div className="size-3 rounded-full bg-green-500 mt-1"></div>
          </div>

          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/20 rounded-md">
            <SquareMinus className="text-white cursor-pointer" />
          </button>
        </div>

        <div className="flex-1 min-h-0 pt-2 bg-amber-50">
          <ScrollArea viewportRef={viewportRef}
            className="h-full w-full px-2 pt-0 pb-3">
            <div className="h-full w-full grid auto-rows-auto gap-2">

              <div className="flex justify-start items-start gap-1 pe-2">
                <img src="/imgs/avatar/vietnamball.png" alt="Bot Image" className="size-10 rounded-full object-cover border-2 border-gray-300" />
                <div className="text-xs rounded-lg p-2 bg-gray-300 mt-1">
                  Xin chào! Tôi là DoanKetBot – trợ lý ảo giúp bạn học nhanh về tư tưởng Hồ Chí Minh.<br />
                  Bạn muốn tìm hiểu phần nào? (Ví dụ: “Vai trò của đại đoàn kết”, “Điều kiện để xây dựng khối đoàn kết”)
                </div>
              </div>

              {chatHistory && (
                chatHistory.map((msg, index) => {
                  if (msg.isBot) {
                    return (
                      <div key={index} className="flex justify-start items-start gap-1 pe-2">
                        <img src="/imgs/avatar/vietnamball.png" alt="Bot Image" className="size-10 rounded-full object-cover border-2 border-gray-300" />

                        <div className="flex flex-col">
                          <button onClick={() => speakText(index, msg.msg)} className="group flex justify-start items-center gap-1 ps-2 cursor-pointer w-fit" title="Đọc nội dung">
                            <Speech className={clsx(
                              "group-hover:text-green-500",
                              speakingIndex === index && !isPaused && "group-hover:text-orange-500",
                              speakingIndex === index && "text-blue-500"
                            )}/>
                            {speakingIndex === index && !isPaused ? (
                              <Pause className="group-hover:text-orange-500 text-blue-500"/>
                            ) : (
                              <Play className={clsx(
                                "group-hover:text-green-500",
                                speakingIndex === index && isPaused && "text-blue-500"
                              )}/>
                            )}
                          </button>

                          <div className="text-xs rounded-lg p-2 bg-gray-300 mt-1 prose">
                            <ReactMarkdown>
                              {msg.msg}
                            </ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="flex justify-end items-start gap-1 ps-2">
                        <p className="text-xs rounded-lg p-2 bg-gray-300 mt-1">
                          {msg.msg}
                        </p>
                        <img src="/imgs/avatar/user.png" alt="User Avatar" className="size-10 rounded-full object-cover border-2 border-gray-300" />
                      </div>
                    );
                  }
                })
              )}

              {aiChat.isPending && (
                <div className="flex justify-start items-start gap-1 pe-2">
                  <img src="/imgs/avatar/vietnamball.png" alt="Bot Image" className="size-10 rounded-full object-cover border-2 border-gray-300" />
                  <div className="text-xs rounded-lg p-2 bg-gray-300 mt-1 flex justify-between items-center gap-4">
                    Xíu nhen
                    <span className="flex justify-center items-center gap-2 h-4">
                      <span className="size-1 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="size-1 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="size-1 bg-red-600 rounded-full animate-bounce"></span>
                    </span>
                  </div>
                </div>

              )}

            </div>
          </ScrollArea>
        </div>

        <div className="flex rounded-b-md bg-gray-200 justify-between items-center min-h-8 p-2 gap-2 border-t-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <Textarea
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            placeholder="chat..."
            className="text-sm w-80 h-10 p-2 bg-gray-100 ring-blue-400" />

          <button disabled={!userMsg}
            className="p-2 cursor-pointer border-2 bg-blue-300 border-blue-400 rounded-md hover:bg-cyan-200 disabled:border-gray-400 disabled:cursor-not-allowed disabled:bg-transparent"
            onClick={() => { setUserMsg(""); aiChat.mutate({ userChat: userMsg, chatHistory, setChatHistory }) }}>
            <SendHorizonal className={clsx(!userMsg ? "text-gray-400" : "text-blue-700")} />
          </button>
        </div>

      </PopoverContent>
    </Popover>,
    document.body
  )
}

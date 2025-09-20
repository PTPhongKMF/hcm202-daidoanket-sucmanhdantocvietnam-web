import { useEffect, useRef, useState } from "react";
import { SendHorizonal, SquareMinus } from "lucide-react";
import { createPortal } from "react-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcn/popover";
import { ScrollArea } from "./shadcn/scroll-area";
import ReactMarkdown from 'react-markdown'
import { Textarea } from "./shadcn/textarea";
import { clsx } from "clsx";

interface ChatMessage {
  isBot: boolean;
  msg: string;
  sentAt: Date;
}

export default function FloatAIChat() {
  const [animate, setAnimate] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [chatHistory, setChatHistory] = useState(() => {
    const chatHistoryStr = sessionStorage.getItem("chatHistory");
    return chatHistoryStr ? JSON.parse(chatHistoryStr)?.history as ChatMessage[] : [] as ChatMessage[];
  });

  const [userMsg, setUserMsg] = useState("")
  const [tempMsg, setTempMsg] = useState("");

  const viewportRef = useRef(null);

  useEffect(() => {
    const chatHistoryStr = JSON.stringify({ history: chatHistory });
    sessionStorage.setItem("chatHistory", chatHistoryStr);
  }, [chatHistory])

  useEffect(() => {
    if (viewportRef.current) {
      const scrollArea = viewportRef.current as HTMLDivElement;
      scrollArea.scroll({ top: scrollArea.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory, tempMsg]);

  async function testHandleSendMsg() {
    setIsLoading(true);

    // giả bộ load 3 giây
    await new Promise(resolve => setTimeout(resolve, 3000));

    setTempMsg("dsds");
    setChatHistory([])

    // if (Math.random() >= 0.5) {
    //   setChatHistory()
    // }
  }

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
        className="w-100 h-130 grid grid-rows-[auto_1fr_auto] p-0 border-0">

        <div className="flex justify-between items-center bg-yellow-500 rounded-t-md p-2">
          <div className="flex gap-4 justify-between items-center w-fit">
            <h3 className="text-xl font-semibold text-white">Chat với mình</h3>
            <div className="size-3 rounded-full bg-green-500 mt-1"></div>
          </div>

          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/20 rounded-md">
            <SquareMinus className="text-white cursor-pointer" />
          </button>
        </div>

        <div className="flex-1 min-h-0 bg-gray-200 pt-2">
          <ScrollArea viewportRef={viewportRef}
            className="h-full w-full px-2 pt-0 pb-3">
            <div className="h-full w-full grid auto-rows-auto gap-2">

              <div className="flex justify-start items-start gap-1 pe-2">
                <img src="/imgs/avatar/vietnamball.png" alt="Bot Image" className="size-10 rounded-full object-cover border-2 border-gray-300" />
                <div className="text-xs rounded-lg p-2 bg-gray-300 mt-1">
                  Có thắc mắc gì về chủ đề bọn mình sao? Đừng ngần ngại hỏi!
                </div>
              </div>

              {chatHistory ? (
                chatHistory.map((msg, index) => {
                  if (msg.isBot) {
                    return (
                      <div key={index} className="flex justify-start items-start gap-1 pe-2">
                        <img src="/imgs/avatar/vietnamball.png" alt="Bot Image" className="size-10 rounded-full object-cover border-2 border-gray-300" />
                        <div className="text-xs rounded-lg p-2 bg-gray-300 mt-1">
                          <ReactMarkdown>
                            {msg.msg}
                          </ReactMarkdown>
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
              ) : (
                <p className="italic flex justify-center items-center text-gray-500">trống</p>
              )}

              {isLoading && (
                <div className="flex justify-start items-start gap-1 pe-2">
                  <img src="/imgs/avatar/vietnamball.png" alt="Bot Image" className="size-10 rounded-full object-cover border-2 border-gray-300" />
                  <div className="text-xs rounded-lg p-2 bg-gray-300 mt-1 flex justify-between items-center gap-4">
                    Xíu nhen
                    <span className="flex justify-center items-center gap-2 h-4">
                      <span className="size-2 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="size-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="size-2 bg-red-600 rounded-full animate-bounce"></span>
                    </span>
                  </div>
                </div>

              )}

            </div>
          </ScrollArea>
        </div>

        <div className="flex bg-gray-300 justify-between items-center min-h-8 p-2 gap-2 border-t-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <Textarea
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            placeholder="chat..."
            className="text-sm w-80 h-10 p-2 bg-gray-100 ring-red-400" />

          <button disabled={!userMsg}
            className="p-2 cursor-pointer border-2 border-blue-400 rounded-md hover:bg-cyan-200 disabled:border-gray-400 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            onClick={testHandleSendMsg}>
            <SendHorizonal className={clsx(!userMsg ? "text-gray-400" : "text-blue-700")} />
          </button>
        </div>

      </PopoverContent>
    </Popover>,
    document.body
  )
}

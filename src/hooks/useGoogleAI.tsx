import { type GenerateContentResponse } from "@google/genai";
import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import type { ChatMessage } from "../components/FloatAIChat";

interface chatData {
  userChat: string;
  chatHistory: ChatMessage[]
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

// const googleAi = new GoogleGenAI({ apiKey: "" })

export function useAiChatMutation() {
  return useMutation<GenerateContentResponse, Error, chatData>({
    mutationFn: async (chatData) => {
      if (!chatData.userChat) throw new Error("Không chat thì gửi làm gì? >:(");
      

      chatData.setChatHistory(prev => [...prev,
      { isBot: false, msg: chatData.userChat, sentAt: new Date() }
      ])

      // const chatModel = googleAi.chats.create({
      //   model: "gemini-2.5-flash",
      //   history: chatData.chatHistory?.map(chat => ({
      //     role: chat.isBot ? "model" : "user",
      //     parts: [{ text: chat.msg }]
      //   })),
      //   config: {
      //     thinkingConfig: {
      //       thinkingBudget: 0
      //     },
      //     systemInstruction: aiInstruction
      //   }
      // })

      // return await chatModel.sendMessage({ message: chatData.userChat })

      return await ky.post("/api/gemini", {
        json: chatData
      }).json<GenerateContentResponse>()
    },
    onSuccess: (data, chatData) => {
      chatData.setChatHistory(prev => [...prev, {
        isBot: true,
        msg: data.text ?? "Lỗi không xác định",
        sentAt: new Date()
      }])
    },
    onError: (error, chatData) => {
      chatData.setChatHistory(prev => [...prev, {
        isBot: true,
        msg: error.message,
        sentAt: new Date()
      }])
    }
  })
}
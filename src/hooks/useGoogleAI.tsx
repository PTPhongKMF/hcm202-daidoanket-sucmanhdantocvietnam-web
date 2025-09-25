import { type GenerateContentResponse } from "@google/genai";
import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import type { ChatMessage } from "../components/FloatAIChat";

interface chatData {
  userChat: string;
  chatHistory: ChatMessage[]
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

export function useAiChatMutation() {
  return useMutation<GenerateContentResponse, Error, chatData>({
    mutationFn: async (chatData) => {
      if (!chatData.userChat) throw new Error("Không chat thì gửi làm gì? >:(");

      chatData.setChatHistory(prev => [...prev,
      { isBot: false, msg: chatData.userChat, sentAt: new Date() }
      ])

      return await ky.post("/api/gemini", {
        json: chatData
      }).json<GenerateContentResponse>()
    },
    onSuccess: (data, chatData) => {
      chatData.setChatHistory(prev => [...prev, {
        isBot: true,
        msg: data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Lỗi không xác định",
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
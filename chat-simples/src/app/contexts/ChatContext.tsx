import { ReactNode, createContext, useContext, useReducer } from "react";
import { Message } from "../types/Message.type";
import { ChatActionsEnum, ChatReducer } from "../reducers/ChatReducer";

type ChatContext = {
  chat: Message[];
  addMessage: (user: string, text: string) => void;
}
export const ChatContext = createContext<ChatContext | null>(null)

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispatch] = useReducer(ChatReducer, [])

  const addMessage = (user: string, text: string) => {
    dispatch({ type: ChatActionsEnum.ADD, payload: { user, text } })
  }

  return (
    <ChatContext.Provider value={{ chat, addMessage }}>{children}</ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)
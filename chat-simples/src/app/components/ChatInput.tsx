import { KeyboardEvent, useState } from "react"
import { useChat } from "../contexts/ChatContext"

type Props = {
  name: string
}

export const ChatInput = ({ name }: Props) => {
  const chatCtx = useChat();

  const [messageInput, setMessageInput] = useState('');

  const handleAddMessage = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === 'enter') {
      if (messageInput.trim() !== '') {
        chatCtx?.addMessage(name, messageInput)
        setMessageInput('')
      }
    }
  }

  return (
    <input
      className="w-full bg-transparent text-white text-md outline-none"
      placeholder={`${name}, digite uma mensagem (e aperte enter)`}
      type="input"
      value={messageInput}
      onChange={e => setMessageInput(e.target.value)}
      onKeyUp={handleAddMessage}

    >
    </input>
  )
}
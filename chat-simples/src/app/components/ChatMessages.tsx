import { useChat } from "../contexts/ChatContext"
import { useUser } from "../contexts/UserContext";

export const ChatMessages = () => {
  const chatCtx = useChat();
  const userCtx = useUser();

  return (
    <div className="flex flex-col gap-1 scroll-behavior:auto">
      {chatCtx?.chat.map((message) => (
        <div
          key={message.id}
          className={`border border-white/20 rounded-md p-2 text-sm 
            ${message.user === userCtx?.user ?
              'self-end bg-white/90 text-right text-black' :
              'self-start bg-white/80 text-left text-black'
            }
          `}
        >
          <div className="font-bold">{message.user}</div>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  )
}
import { PostContext } from "@/app/contexts/PostContext"
import { useContext } from "react"

export const Footer = () => {

  const postCtx = useContext(PostContext)

  return (
    <div>Total de Posts: {postCtx?.posts.length}</div>
  )
}
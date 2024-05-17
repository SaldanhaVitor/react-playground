import { usePosts } from "@/app/contexts/PostContext"

export const Footer = () => {

  const postCtx = usePosts()

  return (
    <div>Total de Posts: {postCtx?.posts.length}</div>
  )
}
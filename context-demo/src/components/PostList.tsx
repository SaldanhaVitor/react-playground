import { PostContext } from "@/app/contexts/PostContext"
import { PostEnum } from "@/app/reducers/PostReducer"
import { useContext } from "react"

export const PostList = () => {
  const postCtx = useContext(PostContext)

  return (
    <div>
      {postCtx?.posts.map(post => (

        <div key={post.id} className="p-3 border-b border-gray-500">

          <div className="text-xl font-bold mb-2">{post.title}</div>

          <div className="text-sm">{post.body}</div>

          <button
            onClick={() => postCtx.dispatch({ type: PostEnum.REMOVE, payload: { id: post.id } })}
          >[remover]</button>

        </div>

      ))}
    </div>
  )
}
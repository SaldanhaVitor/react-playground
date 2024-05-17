import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { Post } from "../types/Post.type";
import { PostActions, PostEnum, PostReducer } from "../reducers/PostReducer";

type PostContextType = {
  posts: Post[]
  dispatch: Dispatch<PostActions>
}
export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(PostReducer, [])

  return (
    <PostContext.Provider value={{ posts, dispatch }} >{children}</PostContext.Provider>
  )
}

export const usePosts = () => useContext(PostContext)
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";
import { Post } from "../types/Post.type";
import { PostActions, PostReducer } from "../reducers/PostReducer";

const STORAGE_KEY = 'postContextContent';

type PostContextType = {
  posts: Post[]
  dispatch: Dispatch<PostActions>
}
export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [posts, dispatch] = useReducer(
    PostReducer,
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
      : []
  )

  useEffect(() => {
    setIsMounted(true);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  if (!isMounted) {
    return null;
  }

  return (
    <PostContext.Provider value={{ posts, dispatch }} >{children}</PostContext.Provider>
  )
}

export const usePosts = () => useContext(PostContext)
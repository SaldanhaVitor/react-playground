import { Post } from "../types/Post.type";

export enum PostEnum {
  ADD,
  REMOVE
}

type AddAction = {
  type: PostEnum.ADD,
  payload: {
    title: string
    body: string
  }
}

type RemoveAction = {
  type: PostEnum.REMOVE,
  payload: {
    id: number
  }
}
export type PostActions = AddAction | RemoveAction

export const PostReducer = (posts: Post[], action: PostActions) => {

  switch (action.type) {
    case PostEnum.ADD:
      return [...posts, {
        id: posts.length,
        title: action.payload.title,
        body: action.payload.body
      }]

    case PostEnum.REMOVE:
      return posts.filter(post => post.id !== action.payload.id)

    default:
      return posts;
  }
}
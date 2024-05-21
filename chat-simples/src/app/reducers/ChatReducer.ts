import { Message } from "../types/Message.type";

export enum ChatActionsEnum {
  ADD
}

type AddAction = {
  type: ChatActionsEnum.ADD,
  payload: {
    user: string,
    text: string
  }
}

type ChatActions = AddAction

export const ChatReducer = (state: Message[], action: ChatActions) => {
  switch (action.type) {
    case ChatActionsEnum.ADD:
      return [...state,
      { id: state.length, user: action.payload.user, text: action.payload.text }
      ]
    default:
      return state
  }
}
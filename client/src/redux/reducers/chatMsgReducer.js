import { ALL_MSG } from "../types/chatTypes"

export const chatMsgReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ALL_MSG: {
      return payload
    }

    default: {
      return state
    }
  }
}

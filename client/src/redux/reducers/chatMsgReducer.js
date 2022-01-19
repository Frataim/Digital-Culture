import { ADD_COMMENT, ALL_COMMENTS } from "../types/commentsTypes"

export const commentsReducer = (state = [], action) => {
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

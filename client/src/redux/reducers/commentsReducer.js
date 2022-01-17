import { ADD_COMMENT, ALL_COMMENTS } from '../types/commentsTypes'


export const commentsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ALL_COMMENTS: {
      return payload
    }

    case ADD_COMMENT: {
      return [
        ...state,
        payload
      ]
    }

    default: {
      return state
    }
  }
}

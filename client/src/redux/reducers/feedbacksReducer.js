import { ALL_FEEDBACKS, ADD_FEEDBACK } from '../types/feedbacksTypes'


export const feedbacksReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ALL_FEEDBACKS: {
      return payload
    }

    case ADD_FEEDBACK: {
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

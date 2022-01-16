
import { ALL_USERS } from '../types/usersTypes'


export const usersReducer = (state = [], action) => {
  const { payload, type } = action

  switch (type) {
    case ALL_USERS: {
      return payload
    }


    default: {
      return state
    }
  }
} 

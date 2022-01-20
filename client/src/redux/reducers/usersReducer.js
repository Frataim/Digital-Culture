
import { ALL_USERS } from '../types/usersTypes'
import { SEARCH_WORKER } from '../types/userTypes'


export const usersReducer = (state = [], action) => {
  const { payload, type } = action

  switch (type) {
    case ALL_USERS: {
      return payload
    }

    case SEARCH_WORKER: {
      const newPa = payload.toLowerCase()
      return state.filter((el) => {
        return el.name.toLowerCase().includes(newPa)
      })
    }


    default: {
      return state
    }
  }
} 

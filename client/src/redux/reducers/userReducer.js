import {ADD_USER, DEL_USER} from '../types/user.types'

export const userReducer = (state = null, action) => {

  switch (action.type) {
    case ADD_USER:
      return action.payload

    case DEL_USER:
      return null

    default: {
      return state
    }
  }
}

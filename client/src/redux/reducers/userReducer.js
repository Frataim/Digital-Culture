import { ADD_USER, DEL_USER, AUTH_CHECK, SIGNIN_USER } from '../types/userTypes'

export const userReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_USER:
      return payload

    case DEL_USER:
      return null

    case AUTH_CHECK:
      return payload

    case SIGNIN_USER:
      return payload

    default: {
      return state
    }
  }
}

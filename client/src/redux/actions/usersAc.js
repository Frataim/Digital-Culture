import { ALL_USERS } from '../types/usersTypes'
import { SEARCH_WORKER } from '../types/userTypes'

export const getAllUsers = () => (dispatch) => {

  fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(data => dispatch({
      type: ALL_USERS,
      payload: data
    }))
}

export const searchUser = (data) => (dispatch) => {
  dispatch({
    type: SEARCH_WORKER,
    payload: data
  })
}

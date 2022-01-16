import { ALL_USERS } from '../types/usersTypes'

export const getAllUsers = () => (dispatch) => {
  fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => dispatch({
      type: ALL_USERS,
      payload: data
    }))
}

import axios from 'axios'
import {ADD_USER, DEL_USER} from '../types/user.types'
// import {addUserToServer} from '../utils/user.utils'

export const addUserAction = (user) => async (dispatch) =>{
  try {
    // const newUser = await addUserToServer(user)
    
    dispatch({
      type: ADD_USER,
      payload: user
    })
  } catch (error) {
    console.log(error)
  }
}

export const delUser = (user) => ({
  type: DEL_USER,
  payload: user
})



// // user action
// import axios from 'axios'
// import {ADD_USER, DEL_USER} from '../types/user.types'

// export const addUserAction = (responce) => ({
//   type: ADD_USER,
//   payload: responce,
// })

export const addUser = (formData) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/users/signup', {formData})
  const responce = userFromBack.data
  dispatch(addUserAction(responce))
}

// export const delUserAction = () => ({
//   type: DEL_USER,
//   payload: null,
// })

// export const delUser = () => async (dispatch) => {
//   axios.get('http://localhost:3001/signout')
//   dispatch(delUserAction())
// }

// export const loginUserAction = (responce) => ({
//   type: ADD_USER,
//   payload: responce
// })

// export const loginUser = (loginForm) => async (dispatch) => {
//   const userFromBack = await axios.post('http://localhost:3001/users/signin', {loginForm})
//   const responce = userFromBack.data
//   dispatch(loginUserAction(responce))
// }

// export const authCheckAction = (responce) => ({
//   type: ADD_USER,
//   payload: responce
// })

// export const authCheck = () => async (dispatch) => {
//   const userFromBack = await axios.post('http://localhost:3001/users/check')
//   const responce = userFromBack.data
//   dispatch(authCheckAction(responce))
// }

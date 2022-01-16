import axios from 'axios'
import {ADD_USER, DEL_USER, SIGNIN_USER, AUTH_CHECK} from '../types/userTypes'

// signup - регистрация пользователя
export const addUserAction = (responce) => ({
  type: ADD_USER,
  payload: responce,
})

export const addUser = (formData) => async (dispatch) => {
  console.log(formData)
  const userFromBack = await axios.post('http://localhost:3001/users/signup', {formData})
  const responce = userFromBack.data
  dispatch(addUserAction(responce))
}

// signout - выход пользователя
export const delUserAction = (user) => ({
  type: DEL_USER,
  payload: user
})

export const delUser = () => (dispatch) => {
  console.log('===>>>>delAct')
  axios.get('http://localhost:3001/users/signout')
  dispatch(delUserAction())
}

// signup - авторизация пользователя
export const signinUserAction = (responce) => ({
  type: SIGNIN_USER,
  payload: responce,
})

export const signinUser = (signinForm) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/users/signin', { signinForm })
  const responce = userFromBack.data
  dispatch(signinUserAction(responce))
}

// проверка пользователя
export const checkUserAction = (responce) => ({
  type: AUTH_CHECK,
  payload: responce,
})

export const checkUser = () => async (dispatch) => {
  const userFromBack = await axios('http://localhost:3001/users/check')
  const responce = userFromBack.data
  dispatch(checkUserAction(responce))
}

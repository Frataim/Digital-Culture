import axios from 'axios'
import { ADD_USER, DEL_USER, SIGNIN_USER, AUTH_CHECK, EDIT_USER } from '../types/userTypes'

// signup - регистрация пользователя
export const addUserAction = (responce) => ({
  type: ADD_USER,
  payload: responce,
})

export const addUser = (formData) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/users/signup', { formData })
  const responce = userFromBack.data
  dispatch(addUserAction(responce))
}

// signout - выход пользователя
export const delUserAction = (user) => ({
  type: DEL_USER,
  payload: user
})

export const delUser = () => (dispatch) => {
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

export const editUser = (data) => async(dispatch) => {
  try {
    const reductUser = await editUserToServer(data)
    dispatch({
      type: EDIT_USER,
      payload: reductUser
    })
  } catch (err) {
    
    console.log(err);
  }
}

// редактировать
export const editUserToServer = async (data) => {
  const response = await fetch('http://localhost:3001/users/edit/'+ data.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  if (response.ok) {
    return await response.json()
  } else {
    throw Error('Noooooooooooo :(((')
  }
}

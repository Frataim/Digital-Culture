import { addUser, delUser } from "../actions/userAction"
import axios from 'axios'

// export const addUserToServer = async (data) => {
//   // здесь ошибка выходит для входа под своей учетной записи
//   const response = await fetch(process.env.REACT_APP_API_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     credentials: 'include',
//     body: JSON.stringify(data)
//   })

//   if (response.ok) {
//     return await response.json()
//   } else {
//     throw Error('Noooooooooooo :(((')
//   }
// }

// зарегистрироваться
export const signUp = (payload) => async (dispatch) => {
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const user = await response.json()
    dispatch(addUser(user))
  }
}

// войти
export const signIn = (payload) => async (dispatch) => {
  const response = await fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const user = await response.json()
    dispatch(addUser(user))
  }
}

// выход
// export const signOut = () => async (dispatch) => {
//   const response = await fetch('/signout', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     credentials:'include'
//   })
//   if (response.ok) {
//     dispatch(delUser())
//   }
// }
 export const signOut = () => async (dispatch) => {
   const response = await axios('/users/signout')
 }

// проверка авторизации
export const authCheck = () => async (dispatch) => {
  const response = await fetch('/', authCheck(), {
    credentials: 'include'
  })
  if (response.ok) {
    const user = await response.json()
    dispatch(addUser(user))
  }
}

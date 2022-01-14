import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addUser } from '../../../redux/actions/userAction';

// зарегистрироваться
const Signup = () => {
  const [reg, setReg] = useState({}) // состояние регистрации
  const navigate = useNavigate()
  const dispatch = useDispatch() // чтоб изменить состояние внутри компонента получаем диспатч
  const user = useSelector((state) => state.user) // получаем состояние 

// если пользователь прошел регистрацию то мы его направляем на его заметки
useEffect(() => {
  if (user) {
    navigate('/')
  }
}, [user])


const inputChange = (e) => {
  setReg((prev) => ({...prev,[e.target.name] : e.target.value}))
}

const regHandler = (e) => {
  e.preventDefault()
  dispatch(addUser(reg))
  navigate('/')


}
  return (
    <form onSubmit={(e) => regHandler(e)}>
    <div className="container my-3">
        <label htmlFor="exampleInputText" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={reg.name}
          onChange={inputChange}
          className="form-control"
          id="exampleInputText"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={reg.email}
          onChange={inputChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="container mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={reg.password}
          onChange={inputChange}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
    <div className="container mb-3">
    <button type="submit" className="btn btn-success">Registration</button>
    </div>
  </form>
  );
}

export default Signup;

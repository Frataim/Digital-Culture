import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import { addUser } from '../../../redux/actions/userAction'

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
    setReg((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const regHandler = (e) => {
    e.preventDefault()
    dispatch(addUser(reg))
    navigate('/')
  }
  return (
    <div className={style.signupContainer}>
      <form className={style.form} onSubmit={(e) => regHandler(e)}>
        <div className={style.container}>
          <h3 className={style.h3}>Имя</h3>
          <input
            type="text"
            name="name"
            value={reg.name}
            onChange={inputChange}
            className="form-control"
          />
        </div>
        <div className={style.container}>
          <h3>Адрес электронной почты</h3>
          <input
            type="email"
            name="email"
            value={reg.email}
            onChange={inputChange}
            className="form-control"
          />
        </div>
        <div className={style.container}>
          <h3>Пароль</h3>
          <input
            type="password"
            name="password"
            value={reg.password}
            onChange={inputChange}
          />
        </div>
        <div className={style.container}>
          <button
            className={style.button}
            type="submit"
            className="btn btn-success"
          >
            Поехали
          </button>
        </div>
      </form>
    </div>

  )
}

export default Signup

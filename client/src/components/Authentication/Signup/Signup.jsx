import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import { addUser, checkUser } from '../../../redux/actions/userAction'

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

  const [select, setSelect] = useState('')

  console.log('-------->> seletc', select)

  const regHandler = (e) => {
    e.preventDefault()
    console.log('=>>>>>>', reg)
    dispatch(addUser({
      ...reg,
      role: select
    }))
    dispatch(checkUser())
    navigate('/')
  }
  return (
    <div className={style.signupContainer}>
      <form className={style.form} onSubmit={(e) => regHandler(e)}>
        <div className={style.container}>
          <label className={style.label}>Имя</label>
          <input
            type="text"
            name="name"
            value={reg.name}
            onChange={inputChange}
            className={style.input}
          />
        </div>
        <div className={style.container}>
          <label className={style.label}>Адрес электронной почты</label>
          <input
            type="email"
            name="email"
            value={reg.email}
            onChange={inputChange}
            className={style.input}
          />
        </div>
        <div className={style.container}>
          <label className={style.label}>Расскажите о себе</label>
          <input
            type="resume"
            name="resume"
            value={reg.resume}
            onChange={inputChange}
            className={style.input}
          />
        </div>
        <div className={style.container}>
          <label className={style.label}>Роль</label>
          <select
            type="role"
            name="role"
            onChange={inputChange}
            onChange={(e) => setSelect(e.target.value)}
            value={select}
            className={style.select}
          >
            <option
              value="2"
              className={style.option}
            >
              Заказчик
            </option>
            <option
              value="3"
              className={style.option}
            >
              Волонтер
            </option>
          </select>
        </div>
        <div className={style.container}>
          <label className={style.label}> Пароль</label>
          <input
            type="password"
            name="password"
            value={reg.password}
            onChange={inputChange}
            className={style.input}
          />
        </div>
        <div className={style.container}>
          <button className={style.button} type="submit">
            Поехали
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup

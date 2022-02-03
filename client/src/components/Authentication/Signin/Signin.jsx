import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signinUser}  from '../../../redux/actions/userAction'
import style from './style.module.css'

const Signin = () => {
  const [log, setLog] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user) 


  useEffect (() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const inputLogChange = (e) => {
    setLog((prev) => ({...prev, [e.target.name] : e.target.value}))
  }

  const logHandler = (e) => {
    e.preventDefault()
    dispatch(signinUser(log)) 
    navigate('/')
  }


  return (
    <div className={style.signinContainer}>
    <form className={style.form} onSubmit={(e) => logHandler(e)}>
      <div className={style.container}>
        <label className={style.label}>
        Адрес электронной почты
        </label>
        <input
          type="email"
          name="email"
          value={log.email}
          onChange={inputLogChange}
          className={style.input}
        />
      </div>
      <div className={style.container}>
        <label className={style.label}>
          Пароль
        </label>
        <input
          type="password"
          name="password"
          value={log.password}
          onChange={inputLogChange}
          className={style.input}
        />
      </div>
      <div className={style.container}>
        <button type="submit" className={style.button}>
          Входим в культуру
        </button>
      </div>
    </form>
    </div>
  )
}

export default Signin

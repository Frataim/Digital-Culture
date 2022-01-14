import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signinUser}  from '../../../redux/actions/userAction'

const Signin = () => {
  const [log, setLog] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()// чтоб изменить состояние внутри компонента получаем диспатч
  const user = useSelector((state) => state.user) // получаем состояние 

// если пользователь зашел под своей учетной записью переходим ...
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
    <form onSubmit={(e) => logHandler(e)}>
      <div className="container my-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={log.email}
          onChange={inputLogChange}
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
          value={log.password}
          onChange={inputLogChange}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="container mb-3">
        <button type="submit" className="btn btn-success">
          Signin
        </button>
      </div>
    </form>
  )
}

export default Signin

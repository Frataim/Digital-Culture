import style from './style.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.functionContainer}>
        <Link to={'/tasks'} className={style.link}>Задачи</Link>
        <Link to={'/worker'} className={style.link}>Исполнители</Link>
        <Link to={'/login'} className={style.link}>Войти</Link>
        <Link to={'/register'} className={style.link}>Зарегистрироваться</Link>
      </div>
    </div >

  )
}

export default NavBar

import style from './style.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function NavBar() {
  const user = useSelector((state) => state.user)
  return (
    <div className={style.navBar}>
      <div className={style.functionContainer}>
        {user ? <div>
          <Link to={'/tasks'} className={style.link}>
          Задачи
        </Link>
        <Link to={'/worker'} className={style.link}>
          Исполнители
        </Link>
        <Link to={'/signout'} className={style.link}>Выход</Link> </div> : <div><Link to={'/signin'} className={style.link}>
          Войти
        </Link>
        <Link to={'/signup'} className={style.link}>
          Зарегистрироваться
        </Link></div>}
      </div>
    </div>
  )
}


export default NavBar

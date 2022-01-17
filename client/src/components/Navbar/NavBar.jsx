import style from './style.module.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { delUser } from '../../redux/actions/userAction'

function NavBar() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signOut = () => {
    window.localStorage.clear()
    dispatch(delUser())
    // dispatch(signOut())
    navigate('/')
  }


  return user ? (
    <div className={style.navBar}>
      <div>
        <Link to={'/tasks'} className={style.link}>
          Задачи
        </Link>
        <Link to={'/worker'} className={style.link}>
          Исполнители
        </Link>
        <button onClick={signOut} className={style.link}>
          Выход
        </button>
      </div>
    </div>
  ) : (
    <div className={style.navBar}>
      <div className={style.functionContainer}>
        <Link to={'/tasks'} className={style.link}>
          Задачи
        </Link>
        <Link to={'/worker'} className={style.link}>
          Исполнители
        </Link>
        <Link to={'/signin'} className={style.link}>
          Войти
        </Link>
        <Link to={'/signup'} className={style.link}>
          Зарегистрироваться
        </Link>
        <Link to={'/create'} className={style.link}>
          Создать задачу
        </Link>
      </div>
    </div>
  )
}

export default NavBar

{
  /* <div className={style.navBar}>
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
) */
}

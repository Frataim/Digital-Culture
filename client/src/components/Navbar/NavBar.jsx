import style from './style.module.css'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { delUser } from '../../redux/actions/userAction'

  const linksList = [
    {
      path: '/create',
      label: 'Создать задачу',
      isUser: true,
      role: 2,
    },
    {
      path: '/tasks',
      label: 'Задачи',
      isUser: true,
      role: 3,
    },
    {
      path: '/workers',
      label: 'Исполнители',
      isUser: true,
      role: 3,
    },
    {
      path: '/profile',
      label: 'Личный кабинет',
      isUser: true,
      role: 3,
    },
    {
      path: '/tasks',
      label: 'Задачи',
      isUser: false,
      role: false,
    },
    {
      path: '/workers',
      label: 'Исполнители',
      isUser: false,
      role: false,
    },
    {
      path: '/signin',
      label: 'Войти',
      isUser: false,
      role: false,
    },
    {
      path: '/signup',
      label: 'Зарегистрироваться',
      isUser: false,
      role: false,
    },
    {
      path: '/commentCreateTest',
      label: 'Тест',
      isUser: false,
      role: false,
    },
  ]
function NavBar() {
  const [links, setLinks] = useState(linksList)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signOut = () => {
    window.localStorage.clear()
    dispatch(delUser())
    // dispatch(signOut())
    navigate('/')
  }



  return (
    <>
      <div className={style.navBar}>

        {links.map((el) =>
          !!user === el.isUser
            ?
            (user?.role === el.role || user?.role === 2 || !!user === el.role) && 
            (
                <Link key={el.path} to={el.path} className={style.link}>
                  {el.label}
                </Link>
              )
            : ''
        )}

        {user && (
          <button onClick={signOut} className={style.link}>
            Выход
          </button>
        )}
      </div>
    </>
  )


}

export default NavBar



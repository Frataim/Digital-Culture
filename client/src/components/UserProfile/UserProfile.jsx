import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import style from './style.module.css'
import TaskUser from './TaskUser/TaskUser'

const UserProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // // пользователь который зарегестрирован/авторизирован
  const user = useSelector((state) => state.user)
  useEffect(() => { }, [])


  return (
    <>
      {user && (
        <div className={style.lkContainer}>
          <div className={style.userProfileContainer}>
            <form className={style.form}>
              <img src={user.avatar} className={style.img} alt="" />

              <div className={style.separator}></div>
              <div className={style.container}>
                <div className={style.name}>Имя</div>
                <div className={style.name1}>{user.name}</div>
              </div>
              <div className={style.separator}></div>
              <div className={style.container}>
                <div className={style.email}>Адрес электронной почты</div>
                <div className={style.email1}>{user.email}</div>
              </div>
              <div className={style.container}>
                <div className={style.about}>Расскажите о себе</div>
                <div className={style.about1}>{user.resume}</div>
              </div>
              <div className={style.separator}></div>
              <div className={style.container}>
                <div className={style.role}>Роль</div>
                <div className={style.role1}>{user.role === 3 ? 'Исполнитель' : 'Заказчик'}</div>
              </div>
              <div className={style.separator}></div>
              <div className={style.buttonContainer}>
                <button
                  onClick={() => navigate('/create')}
                  className={style.button}
                  type="submit"
                >
                  Создать задачу
                </button>
              </div>
              <div className={style.buttonContainer}>
                <button
                  onClick={() => navigate('/edit')}
                  className={style.button}
                  type="submit"
                >
                  Редактировать
                </button>
              </div>
            </form>
          </div>
          <div className={style.taskUserContainer}>
            <TaskUser />
          </div>
        </div>
      )}
    </>
  )
}

export default UserProfile

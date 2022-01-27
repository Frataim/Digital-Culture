import React from 'react'
import style from './style.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function CurrentWorker() {
  const { id } = useParams()
  const tasks = useSelector(store => store.tasks)
  const user = useSelector(store => store.users)
    .find(el => el.id === +id)

  return (
    <div className={style.currentWorkerContainer}>
      <div className={style.currentWorkerInfoContainer}>
        <div className={style.currentWorkerAvatar}>
          <img className={style.avatar} src={user.avatar} alt="" />
        </div>
        <div className={style.currentWorkerName}>
          <div className={style.aboutName}>Имя: </div>
          <div className={style.name}>{user.name}</div>
        </div>
        <div className={style.currentWorkerEmail}>
          <div className={style.aboutEmail}>Адрес электронной почты</div>
          <div className={style.email}>{user.email}</div>
        </div>
        <div className={style.aboutMe}>
          <div className={style.aboutHeader}>Расскажите о себе</div>
          <div className={style.about}>{user.resume}</div>
        </div>
        <div className={style.aboutRole}>
          <div className={style.roleHead}>Роль</div>
          <div className={style.role}>{user.role === 2 ? 'Заказчик' : 'Исполнитель'}</div>
        </div>
      </div>
      <div className={style.currentTaskContainer}>
        <h2>Завершенные задачи: </h2>
        {
          tasks.map((el) => {
            return <div key={el.id} className={style.worker}></div>
          })
        }
      </div>
    </div>
  )
}

export default CurrentWorker

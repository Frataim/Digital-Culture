import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import style from './style.module.css'
import TaskUser from './TaskUser/TaskUser';

const UserProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // // пользователь который зарегестрирован/авторизирован
  const user = useSelector((state) => state.user)
  useEffect(() => {
  }, [])
  


  return (  
  <div className={style.userProfileContainer}>
    <form className={style.form}>
      <div className={style.container}>
        <div className={style.container}>Имя</div>
        <div className={style.container}>{user.name}</div>
      </div>
      <div className={style.container}>
        <div className={style.container}>Адрес электронной почты</div>
        <div className={style.container}>{user.email}</div>
      </div>
      <div className={style.container}>
        <div className={style.container}>Расскажите о себе</div>
        <div className={style.container}>{user.resume}</div>
      </div>
      <div className={style.container}>
        <div className={style.container}>Роль</div>
        <div className={style.container}>{user.role}</div>
      </div>
      <div className={style.container}>
        <button onClick={() => navigate('/create')} className={style.button} type="submit">
          Создать задачу
        </button>
      </div>
      <div className={style.container}>
        <button onClick={() => navigate('/edit')} className={style.button} type="submit">
          Редактировать
        </button>
      </div>
    </form>
    <div className={style.taskUserContainer}>
      <TaskUser />
    </div>
    
  </div>
  );
}

export default UserProfile;

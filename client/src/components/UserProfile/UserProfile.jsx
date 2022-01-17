import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const UserProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // пользователь который зарегестрирован/авторизирован
  const user = useSelector((state) => state.user)
  const { id } = useParams() 

  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    resume: user.resume,
    role: user.role,
  })

  const [valid, setValid] = useState(false)
  // проверка на авторизированного пользователя
  // если данные авторизированного пользователя соответствует то true иначе false
  useEffect (() => {
    if (

    ) {}
    
  })

  // Создать задачу
  handleClickTasks () {

  }

  // редактировать профиль
  handleClickEdit () {

  }
  return (
    <div className={style.userProfileContainer}> 
      <form className={style.form}>
        <div className={style.container}>
          <label className={style.label} >Имя</label>
          <input 
          type="text" 
          name="name" 
          value={user.name}
          onChange={(e) => setProfile({...profile, name: e.target.value})} 
          className={style.input}/>
        </div>
        <div className={style.container}>
          <label className={style.label}>Адрес электронной почты</label>
          <input 
          type="email" 
          name="email" 
          value={user.email}
          onChange={(e) => setProfile({...profile, email: e.target.value})} 
          className={style.input}/>
        </div>
        <div className={style.container}>
          <label className={style.label}>Расскажите о себе</label>
          <input 
          type="resume" 
          name="resume" 
          value={user.resume}
          onChange={(e) => setProfile({...profile, resume: e.target.value})} 
          className={style.input}/>
        </div>
        <div className={style.container}>
          <label className={style.label}>Роль</label>
          <select
            type="role"
            name="role"
            value={user.role}
            onChange={(e) => setProfile({...profile, role: e.target.value})}
            className={style.select}
          >
          </select>
          </div>
          <div className={style.container}>
          <button onClick={() => navigate('/create')} className={style.button} type="submit">
            Создать задачу
          </button>
          <div className={style.container}>
          <button onClick={() => navigate('/users/edit')} className={style.button} type="submit">
            Редактировать
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;

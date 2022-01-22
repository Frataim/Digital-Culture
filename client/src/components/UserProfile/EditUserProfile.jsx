import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import style from './style.module.css';
import {editUser} from './../../redux/actions/userAction'

const EditUserProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const [profile, setProfile] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    resume: user.resume,
    role: user.role,
  })

  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editUser(profile))
  }

  return (
    <div className={style.userProfileContainer}> 
    <form className={style.form} >
      <div className={style.container}>
        <label className={style.label}>Имя</label>
        <input 
        type="text" 
        name="name" 
        value={profile.name}
        onChange={(e) => setProfile({...profile, name: e.target.value})} 
        className={style.input}/>
      </div>
      <div className={style.container}>
        <label className={style.label}>Адрес электронной почты</label>
        <input 
        type="email" 
        name="email" 
        value={profile.email}
        onChange={(e) => setProfile({...profile, email: e.target.value})} 
        className={style.input}/>
      </div>
      <div className={style.container}>
        <label className={style.label}>Расскажите о себе</label>
        <input 
        type="resume" 
        name="resume" 
        value={profile.resume}
        onChange={(e) => setProfile({...profile, resume: e.target.value})} 
        className={style.input}/>
      </div>
        <div className={style.container}>
          <button onClick={(e) => {
            editHandler(e)
            navigate('/profile')}} className={style.button} type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserProfile;

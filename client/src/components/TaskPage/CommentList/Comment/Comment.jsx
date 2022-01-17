import React from 'react'
import { useDispatch } from 'react-redux';
import { upTaskThunk } from '../../../../redux/actions/tasksAc';
import style from './style.module.css'

function Comment( { comment, user_id, task_id, User }) {

  const dispatch = useDispatch()

  const handleMatch = () => {
    console.log('CLICK', User, comment, user_id, task_id);
    dispatch(upTaskThunk(task_id, user_id))
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.userContainer}>
        <img className={style.img} src={User.avatar}></img>
        <div>{User.name} / волонтёр:</div>
      </div>
      <div>
        {comment}
      </div>
      <button type='button' onClick={handleMatch} className={style.btn}>
        ВЫБРАТЬ ИСПОЛНИТЕЛЯ
      </button>
    </div>
  )
}

export default Comment


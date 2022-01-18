import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { upTaskThunk } from '../../../../redux/actions/tasksAc';
import style from './style.module.css'

function Comment( { comment, user_id, task_id, User }) {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const tasks = useSelector((state) => state.tasks)
  const task = tasks.filter(el => el.id === task_id)[0]

  console.log('TASK ------------>', User);

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
      {
        user.role === 2 && task.owner === user.id && (
          <button type='button' onClick={handleMatch} className={style.btn}>
            ВЫБРАТЬ ИСПОЛНИТЕЛЯ
          </button>
        )
      }
    </div>
  )
}

export default Comment


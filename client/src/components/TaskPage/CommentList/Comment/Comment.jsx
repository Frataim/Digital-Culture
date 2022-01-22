import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { upTaskThunk } from '../../../../redux/actions/tasksAc';
import style from './style.module.css'

function Comment( { comment, user_id, task_id }) {
  
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const tasks = useSelector((state) => state.tasks)
  const owner = useSelector((state) => state.user)
  const user = users.filter(el => el.id === user_id)[0]
  const task = tasks.filter(el => el.id === task_id)[0]
  const handleMatch = () => {
    dispatch(upTaskThunk(task_id, user_id))
  }
  useEffect(() => {
  
  }, [])

  return (
    <>
      {user && task && (
        <div className={style.mainContainer}>
          <div className={style.userContainer}>
            <img className={style.img} src={user.avatar}></img>
            <div>{ user.name } / волонтёр:</div>
          </div>
          <div>
            {comment}
          </div>
          {
            owner.role === 2 && task.owner === owner.id && (
              <button type='button' onClick={handleMatch} className={style.btn}>
                ВЫБРАТЬ ИСПОЛНИТЕЛЯ
              </button>
            )
          }
        </div>
      )}
    </>
  )
}

export default Comment


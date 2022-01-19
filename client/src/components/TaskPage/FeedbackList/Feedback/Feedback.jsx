import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../../../redux/actions/usersAc'
import style from './style.module.css'

function Feedback( { feedback, user_id, task_id }) {
  const users = useSelector((state) => state.users)
  const user = users.filter(el => el.id === user_id)[0]
  return (
    <div className={style.mainContainer}>
      <div className={style.userContainer}>
        <img className={style.img} src={user.avatar}></img>
        <div>{user.name} / волонтёр:</div>
      </div>
      <div>
        {feedback}
      </div>
    </div>
  )
}

export default Feedback


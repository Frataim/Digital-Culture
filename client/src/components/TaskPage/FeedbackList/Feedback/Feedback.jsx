import React from 'react'
import style from './style.module.css'

function Feedback( { feedback, user_id, task_id, User }) {
  
  return (
    <div className={style.mainContainer}>
      <div className={style.userContainer}>
        <img className={style.img} src={User.avatar}></img>
        <div>{User.name} / волонтёр:</div>
      </div>
      <div>
        {feedback}
      </div>
    </div>
  )
}

export default Feedback


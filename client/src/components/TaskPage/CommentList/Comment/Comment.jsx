import React from 'react'
import style from './style.module.css'

function Comment( { comment, user_id, task_id, User }) {
console.log(User);
  
  return (
    <div className={style.mainContainer}>
      <div className={style.userContainer}>
        <img className={style.img} src={User.avatar}></img>
        <div>{User.name} / волонтёр:</div>
      </div>
      <div>
        {comment}
      </div>
      <button className={style.btn}>
        ВЫБРАТЬ ИСПОЛНИТЕЛЯ
      </button>
    </div>
  )
}

export default Comment


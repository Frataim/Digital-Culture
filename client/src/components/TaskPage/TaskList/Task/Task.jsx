import React from 'react'
import style from './style.module.css'
import { Link, useParams } from 'react-router-dom'
import sanya from '../../../../sanya.jpg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'


function Task({ id, title, category, description, deadline, status, owner, createdAt, Comments, Tags, User }) {
  

  return (
    <div className={style.taskContainer}>
      <div className={style.ownerContainer}>
        <img className={style.ownerImg} src={User.avatar} alt=''></img>
        <p className={style.taskAboutOwner}>{User.name}</p>
      </div>
      <div className={style.taskHeader}>{title}</div>
      <div className={style.taskAbout}>
        <div className={style.taskDeadline}>{deadline}</div>
        <div className={style.taskBorn}>{createdAt}</div>
        <div className={style.taskFeedBack}>Отклики: {Comments.length}</div>
      </div>
      <Link to={`/tasks/${id}`}>
        <div className={style.taskDescription}>
          {description}
        </div>

      </Link>
      <div className={style.taskSeparator}></div>
      <div className={style.taskTagContainer}>
        <div className={style.taskCategory}>{category}</div>
        <div className={style.taskTag}>{Tags.map((el) => {
          return <div>{el.tag}</div>
        })}</div>
      </div>
    </div>
  )
}

export default Task

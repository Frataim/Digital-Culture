import React from 'react'
import Task from './Task/Task'
import style from './style.module.css'
import { useSelector } from 'react-redux'

function TaskList() {
  const tasks = useSelector(store => store.tasks)


  return (
    <div className={style.taskListContainer}>
      {tasks.map((el) => <Task key={el.id} {...el} />)}
    </div>
  )
}

export default TaskList

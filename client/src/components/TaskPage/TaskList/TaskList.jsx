import React from 'react'
import Task from './Task/Task'
import style from './style.module.css'

function TaskList({ flag }) {
  const base = [
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
    { title: 'Создайте сайт плиз' },
  ]


  return (
    <div className={style.taskListContainer}>
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default TaskList

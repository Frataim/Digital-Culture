import React from 'react'
import Task from './Task/Task'
import style from './style.module.css'
import { useSelector } from 'react-redux'

function TaskList() {
  const tasks = useSelector(store => store.tasks)

  return (
    <>{tasks.length === 0 &&
      <div className={style.noTask}>Упс, по такой категории задач нету !</div>
    }
      {tasks && (
        <div className={style.taskListContainer}>
          {tasks.map((el) => <Task key={el.id} {...el} />)}
        </div>
      )}
    </>
  )
}

export default TaskList

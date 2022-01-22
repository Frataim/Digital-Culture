import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../../TaskPage/TaskList/Task/Task'
import style from './style.module.css'

const TaskUser = () => {
  const tasks = useSelector((store) => store.tasks)
  const user = useSelector((state) => state.user)

  const [arr, setArr] = useState([])

  useEffect(() => {
    if (user.role === 2) {
      setArr(tasks.filter((e) => e.owner === user.id))
    }

    if (user.role === 3) {
      setArr(tasks.filter((e) => e.worker === user.id))
    }
  }, [])

  return (
    <div>
      <h3 className={style.container}>Мои задачи: </h3>
      {tasks.length > 0 && (
        <div className={style.taskListContainer}>
          {arr.map((el) => (
            <Task key={el.id} {...el} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskUser

import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Task = ({ taskId }) => {
  const { id, userOwner, title, deadline, created_at } = useSelector((state) => state.task[taskId - 1])
  return (
    <div>
      <div>
        {id}, {userOwner}, {title}, {deadline}, {created_at}
      </div>
      <Link to={`/tasks/${id}`}>
        <button onClick={() => console.log(id, userOwner, title, deadline, created_at)}>Link на {taskId}</button>
      </Link>
    </div>
  )
}

export default Task

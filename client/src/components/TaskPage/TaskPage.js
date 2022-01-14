import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './TaskPage.css'
const TaskPage = () => {
  const idTask = useParams().id
const { id, userOwner, title, deadline, created_at, avatar } = useSelector((state) => state.task[idTask-1])
  return (
    <div
      className="containerTaskPage"
      onClick={() => {
        console.log(id)
      }}
    >
      <div className="leftRow">Первая колонка <i></i></div>
      <div className="rightRow">
        {id} , {userOwner},{title},{deadline},{created_at}
      </div>
    </div>
  )
}

export default TaskPage

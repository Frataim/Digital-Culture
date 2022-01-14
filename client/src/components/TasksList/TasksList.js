import * as React from "react"
import { useSelector } from "react-redux"
import Task from "../Task/Task"
const Tasks = () => {

const arrTasks = useSelector((state) => state.task)



              
  return (
    <div className="container" style={{ margin: "100px 100px", border: "solid 2px" }}>
      {arrTasks.map((el,i) => {
        return (
          <div className="task" style={{ margin: "20px", padding: "20px", border: "solid 2px" }}>
            <Task  taskId={el.id} />
          </div>
        )
      })}


      <button onClick={() => console.log(arrTasks[0])}>проверка</button>
    </div>
  )
}

export default Tasks

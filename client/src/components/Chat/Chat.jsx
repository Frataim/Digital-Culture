import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { upTaskThunk } from "../../redux/actions/tasksAc"
import style from './style.module.css'
const Chat = ({task}) => {
  const socket = new WebSocket("ws://localhost:3001")
  
  const [input, setInput] = useState("")
  useEffect(() => {
    socket.onopen = () => {
      console.log("sssss", input)
      socket.send(JSON.stringify({ id: "2", msg: input }))
    }
  }, [])
  const handleClick = (e) => {
    e.preventDefault()
    setInput(e.currentTarget.mess.value)
    console.log(e.currentTarget.mess.value)
    e.currentTarget.mess.value = ""
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleMatch = () => {
    dispatch(upTaskThunk(task.id, 0))
    navigate("/tasks/" + task.id)
  }
  
  return (
    <div>
      <button type="button" onClick={handleMatch} className={style.btn}>
        ПРИНЯТЬ РАБОТУ
      </button>
      <form onSubmit={handleClick} >
        <div className="chatBox">
          <p className='currentMsg'>"currTime"</p>
          <p></p>
        </div>
        <input className={style.input} name="mess" autocomplete="off"></input>
        <button className={style.btnMsg}>отправить сообщение</button>
      </form>
    </div>
  )
}

export default Chat

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { upTaskThunk } from "../../redux/actions/tasksAc"
import style from "./style.module.css"
const Chat = ({ task }) => {
  console.log(task)

  const socket = new WebSocket("ws://localhost:3001")
  const { user, chats } = useSelector((state) => state)

  const currentMSG = chats.filter(el => el.task == task.id)
  console.log('curr', currentMSG);
  const [input, setInput] = useState("")
  useEffect(() => {
    socket.onopen = () => {
      console.log("my life, my rulzzz: ", input)
      if (input.length > 0) {
        
        socket.send(JSON.stringify({ task: task.id, msg: input, user: user.id, name: user.name }))
      } 
    }
  }, [input])

  const handleClick = (e) => {
    e.preventDefault()
    if (e.currentTarget.mess.value.length > 0) {
      setInput(e.currentTarget.mess.value)
      console.log('pfgbcfyj', e.currentTarget.mess.value)
      e.currentTarget.mess.value = ""
    }
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
      <form onSubmit={handleClick}>
        <div className="chatBox">
          {currentMSG.map(el => {
            return (<p className="currentMsg">{el.msg}</p>)
          })}
         
        </div>
        <input className={style.input} name="mess" autocomplete="off"></input>
        <button className={style.btnMsg}>отправить сообщение</button>
      </form>
    </div>
  )
}

export default Chat

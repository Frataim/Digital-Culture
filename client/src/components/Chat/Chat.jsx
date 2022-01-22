import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { allMsg } from "../../redux/actions/msgAc"
import { upTaskThunk } from "../../redux/actions/tasksAc"
import style from "./style.module.css"


const Chat = ({ task }) => {
  const socket = new WebSocket("ws://localhost:3001")
  const user = useSelector((state) => state.user)
  const chats = useSelector((state) => state.chats)
  const [input, setInput] = useState("")

  useEffect(() => {
    socket.onopen = () => {
      if (input.length > 0) {
        socket.send(JSON.stringify({ task: task.id, msg: input, user: user.id, name: user.name }))
      }
    }
    dispatch(allMsg())    
  }, [input])

  const handleClick = (e) => {
    e.preventDefault()
    if (e.currentTarget.mess.value.length > 0) {
      setInput(e.currentTarget.mess.value)
      e.currentTarget.mess.value = ""
      
    }
  }
  const messagesRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleMatch = () => {
    dispatch(upTaskThunk(task.id, 0))
    navigate("/tasks/" + task.id)
  }
  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999)
  }, [chats])
  return (
    <>
    
    <div>
      {user && user.role === 2 && (
        <button type="button" onClick={handleMatch} className={style.btn}>
          ПРИНЯТЬ РАБОТУ
        </button>
      )}
      
      <div className={style.chat}>
        <div className={style.chatMessages}>
          <div ref={messagesRef} className={style.messages}>
            {chats.filter((el)=>el.task === task.id).map((el) => (
              <div className={style.message}>
                <p>{el.msg}</p>
                <div>
                  <span>{el.name}</span>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleClick}>
            <input className={style.input} name="mess" autocomplete="off" placeholder="введите соообщение"></input>
            <button className={style.btnMsg}>отправить сообщение</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chat

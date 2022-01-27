import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { upTaskThunk } from "../../redux/actions/tasksAc"
import style from "./style.module.css"
import { io } from "socket.io-client"

const socket = io.connect("http://localhost:3001")

const Chat = ({ task }) => {
  const user = useSelector((state) => state.user)

  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    socket.on("messageB", ({ user, msg,name, task }) => {
      setMessages([...messages, { user, msg, name, task }])
    })
    socket.on("getMessages", (tmp) => {
      setMessages(tmp)
    })
  }, [messages, socket])

  useEffect(() => {
    socket.emit("getMessages", task)
  }, [])

  const messagesRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    console.log("user name", messages[0].name)
    socket.emit("messageF", { user: user, msg: text, task: task })
    setText("")
  }

  const handleMatch = () => {
    dispatch(upTaskThunk(task.id, 0))
    navigate("/tasks/" + task.id)
  }

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999)
  }, [messages])

  return (
    <div>
      <button type="button" onClick={handleMatch} className={style.btn}>
        ПРИНЯТЬ РАБОТУ
      </button>

      <div className={style.chat}>
        <div className={style.chatMessages}>
          <div ref={messagesRef} className={style.messages}>
            {messages &&
              messages.map((el) => {
                return (
                  <div className={style.message}>
                    <p>{el.msg}</p>
                    <div>
                      <span>{el.name}</span>
                    </div>
                  </div>
                )
              })}
          </div>
          <form onSubmit={handleClick}>
            <input
              className={style.input}
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
              name="mess"
              autocomplete="off"
              placeholder="введите соообщение"
            ></input>
            <button type="submit" className={style.btnMsg}>
              отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat

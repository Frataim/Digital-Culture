import React, { useEffect, useState } from "react"

const Chat = ({task}) => {
  const socket = new WebSocket("ws://localhost:3001")
  console.log({ socket })
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
      <form onSubmit={handleClick}>
        <div>
          окно чата конкетной таски, фиксированный размер
          <p>здесь каждое сообщение конкретно</p>
        </div>
        <input name="mess"></input>
        <button>отправить сообщение</button>
      </form>
    </div>
  )
}

export default Chat

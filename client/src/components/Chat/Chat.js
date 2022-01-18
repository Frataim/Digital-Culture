import React, { useEffect, useState } from "react"

const Chat = () => {
  const socket = new WebSocket("ws://localhost:3001")
  console.log({ socket })
  const [input, setInput] = useState("")
  const handleClick = (e) => {
    e.preventDefault()
    setInput(e.currentTarget.mess.value)
    console.log(e.currentTarget.mess.value)
  }

  useEffect(() => {
    socket.onopen = () => {
      console.log("sadas", input)
      socket.send(JSON.stringify({id:'2', msg: input }))
    }
  }, [input])
  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <p>здесь каждое сообщение</p>
        </div>
        <input name="mess"></input>
        <button>отправить сообщение</button>
      </form>
    </div>
  )
}

export default Chat

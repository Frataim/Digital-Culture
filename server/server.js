const http = require("http")
const { Server } = require("socket.io")
const { app } = require("./app")
const { Chat } = require("./db/models")

const server = http.createServer(app)

const io = new Server(server, { cors: { origin: true } })

// let arr = []

let chatUsers = []

io.on("connection", async (socket) => {
  socket.on("getMessages", async (task) => {
    const tmp = await Chat.findAll({
      where: {
        task: task.id,
      },
    })
    io.emit("getMessages", tmp)
  })

  socket.on("messageF", async ({ user, msg, task }) => {
    console.log("asdasdsadasdasdasdasd", { user, msg, task })
    const tmp = await Chat.create({ task: task.id, user: user.id, name: user.name, msg: msg })
    io.emit("messageB", tmp)
  })
})

server.listen(3001, () => {
  console.log("запущен")
})

const { app } = require("./app.js")
const { createServer, request } = require("http")
const WebSocket = require("ws")

const server = createServer(app)

const wss = new WebSocket.Server({ clientTracking: false, noServer: true })

server.on("upgrade", (request, socket, head) => {
  console.log("Server on")
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request)
  })
})

wss.on("connection", (ws, request) => {
  ws.on("message", async (message) => {
    console.log(JSON.parse(message))
  })
})

server.listen(3001, () => {
  console.log("сервер запущен!")
})

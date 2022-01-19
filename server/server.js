const express = require('express')
const { Chat } = require("./db/models")

const { createServer, request } = require('http');
const WebSocket = require('ws');
const { app } = require('./app.js');

const server = createServer(app);

const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

server.on('upgrade', (request, socket, head) => {
  console.log('Server on');
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (ws, request) => {
  ws.on('message', async (message) => {
    console.log('Сообщение: ', JSON.parse(message))
    const { task, user, name, msg } = JSON.parse(message)
    const newComment = await Chat.create({ task, user, name, msg })
    console.log(newComment)
    
  });
});

server.listen(3001, () => {
  console.log('сервер запущен!');
});

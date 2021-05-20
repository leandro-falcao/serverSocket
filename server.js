const { log } = require('console')
const express = require('express')
const app = express()

const http = require('http').Server(app)
const serverSocket = require('socket.io')(http)

const port = 3111

http.listen(port, function () {
  console.log(`servidor iniciado na porta: ${port}`);
})

app.get('/', function (req, res){
  res.send('<h1> ola mundo</h1>')
})
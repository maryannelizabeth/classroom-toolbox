const express = require('express')
const path = require('path')

//server
const server = express()
module.exports = server

//middleware
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: true }))

//may be missing server.engine

//routes
server.get('/', (req, res) => {
  res.send('Hello')
})

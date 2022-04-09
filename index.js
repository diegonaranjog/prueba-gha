const express = require('express')
const { server } = require('./config')
const { host, port } = server

const app = express()

app.use('/', (req, res) => {
  res.json('hi server')
})

app.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`)
})
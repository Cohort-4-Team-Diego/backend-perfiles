const express = require('express')
const config = require('./CONFIG')
const db = require('./db')

db(config.dbUrl)

const app = express()
const server = require('http').Server(app)

server.listen(config.port, function(){
    console.log(`Servidor escuchando en ${config.host}:${config.port}`)
})

app.use('/',require('./routes/profiles'))





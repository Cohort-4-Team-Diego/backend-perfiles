const express = require('express')
const config = require('./CONFIG')
const db = require('./db')
const morgan = require('morgan')

db(config.dbUrl)
const app = express()
const server = require('http').Server(app)

app.use(morgan('dev'));
app.use (express.json ({limit: config.limitUploadFiles, extended: true}))
app.use (express.urlencoded ({limit:  config.limitUploadFiles, extended: true}))

app.use('/profiles',require('./routes/profiles'))

server.listen(config.port, function(){
    console.log(`Servidor escuchando en ${config.host}:${config.port}`)
})

app.use('/hello', (req, res) => {
    res.send('Hola mundo')
})
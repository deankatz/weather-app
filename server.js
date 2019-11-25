//server Setup
const express = require('express')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const City = require('./server/model/City')
const request = require('request')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
//mongoose Setup
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/weatherDB', { useNewUrlParser: true })
//bodyParser Setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)




const port =8080
app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})


const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/route')
const fbrouter = require('./routes/fbroute')
const mongodb = require('./mongodb')
const session = require('express-session')
redis = require('redis')
client = redis.createClient()
require('dotenv').config()
const app = express()
var expressValidator = require('express-validator')
app.use(expressValidator())

// parse requests of content-type-application/X-WWW-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type-application/json
app.use(bodyParser.json())
app.use('/', router)
app.use('/', fbrouter)

app.use(session({
    secret: 'creative developer',
    resave: true,
    saveUninitialized: true
}))

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000')
})
// app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app

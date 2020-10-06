require('./models/Users')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middleware/requireAuth')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

// enter mongo url
const mongoUri = ''
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
    console.log(err)
})
app.get('/', requireAuth, (req,res) => {
    res.send(`your email is ${req.user.email}`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})

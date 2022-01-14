require('dotenv').config()


const express = require('express')
const app = express()
const mongoose = require('mongoose')

//mongoose.connect('mongodb://127.0.0.1:27017/wikiDB')
mongoose.connect('mongodb+srv://foodappdebug:foodappdebug@cluster0.avnbx.mongodb.net/foodappdebug?retryWrites=true&w=majority')

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to Database'))
app.use(express.json())

const articlesRouter = require('./routes/articles')
app.use('/articles', articlesRouter)

const userrouter = require('./routes/users')
app.use('/users', userrouter)

//'localhost:3000/articles/sdfsdf'

const vendorsrouter = require('./routes/vendors')
app.use('/vendors', vendorsrouter)



app.listen(3000, () => console.log('Server Started'))
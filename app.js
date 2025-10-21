
require('dotenv').config()
const dbURI = process.env.MONGODB_URL

const { render } = require('ejs')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

//invoking express app
const app = express()

// connection to mongodb 
mongoose.connect(dbURI)
    .then((results) =>
        console.log('connected to database'))
    .catch((error) => console.log(error))

//register view engine 
app.set('view engine', 'ejs')

//if i want to create a different folder 
// app.set('views', 'myviews')


//listen for requests
app.listen(3000)

//using morgan middleware
app.use(express.static('public'))
app.use(morgan('dev'))

//the next makes sure that it moves to the next middleware
app.use((req, res, next) => {
    console.log('new request made')
    console.log('host:', req.hostname)
    console.log('path', req.path)
    console.log('method', req.method)
    next();
})
app.use((req, res, next) => {
    console.log('i moved to the next')
    next();
})
//express automatically sets headrs and status codes so its easier
app.get('/', (req, res) => {
    const blogs = [{ title: 'Hero of west', snippet: 'the hero that came alive' },
    { title: 'Intedimenssion travel', snippet: 'travel through space and time' }
    ]
    res.render('index', { title: 'Home', blogs })
})


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

//forces a redirect and sets the status code which is 301
app.get('/about-us', (req, res) => {
    res.redirect('./about')
})

app.get('/views/create', (req, res) => {
    res.render('create', { title: 'Create' })
})

//404 page ,, this will run regardless of the typed url and checks if it exits
app.use((req, res) => {
    res.status(404).render('404', { title: '404 error' })
})

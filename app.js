
require('dotenv').config()
const dbURI = process.env.MONGODB_URL

const { render } = require('ejs')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

//invoking express app
const app = express()

// connection to mongodb 
mongoose.connect(dbURI)
    .then((results) =>//listen for requests
        app.listen(4000))
    .catch((error) => console.log(error))

console.log('connected to database and every thing is right')

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

//mongoose and mongo snadbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'this is what i was trying to do today'
    })
    blog.save().then((result) => {
        res.send(result)
    })
        .catch((error) => {
            console.log(error)
        })
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById("68f720c243c53559ab34d20a")
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
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

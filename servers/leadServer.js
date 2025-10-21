/*
STATUS CODES
200 - OK
301 - Resource Moved
404 - Page not found
500 - internal server error 

100 range = informational repsonses 
200 range = success codes
300 range = for redirects
400 range = user or client error codes 
500 range = server error codes 
*/



const http = require('http')
const fs = require('fs')
const { error } = require('console')

// import lodash which was downloaded with npm
const _ = require('lodash')

//storing the server incase i want to use it later for websockets
const server = http.createServer((request, response) => {
    //this helps get information about the url used and its method
    // console.log(request.url, request.method)

    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(() => {
        console.log('hello')
    })
    greet()

    //set header contnet type 
    response.setHeader('Content-Type', 'text/html')

    //routing pages 
    let path = './views/'

    switch (request.url) {
        case '/':
            path += 'index.html'
            response.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            response.statusCode = 200
            break;
        case '/about-me':
            response.statusCode = 301
            response.setHeader('Location', '/about')
            response.end()
            break;
        default:
            path += '404.html'
            response.statusCode = 404
            break;
    }

    //send an html file
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error)
            response.end()
        } else {
            response.write(data)
            response.end()
        }


    })
})

server.listen(4000, 'localhost', () => {
    console.log('listeneing for requests on port 4000 lets gooo')
}) 
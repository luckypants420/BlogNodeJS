//importing the right files to allow us to enteract with the file system
const { error } = require('console')
const fs = require('fs')


//reading files, in an async way which means it takes a little time
fs.readFile('./docs/blogtxt.txt', (error, data) => {
    if (error) {
        console.log(error)
    }
    //without toString data returns buffer of data
    console.log(data.toString())
})
console.log('last line')


//writing files

/*
if i write the path to the file i want to write
 to wrong it will create a new file 
*/
fs.writeFile('./docs/blogtxt.txt', 'hello world', () => {
    console.log('file was written')
})

//directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error)
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error)
        }
        console.log('folder deleted')
    })
}


//deleting files 
if (fs.existsSync('./docs/deleteme.txt')) {
    //unlink is the method to delete a file
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) {
            console.log(error)
        }
        console.log('file deleted')
    })
}
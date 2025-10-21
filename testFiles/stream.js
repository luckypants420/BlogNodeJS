// const fs = require('fs')


// //right here i used encoding on the reading so that it returns in base64 format 
// const readStream = fs.createReadStream('./docs/bigblog.txt', { encoding: 'utf8' })
// const writeStream = fs.createWriteStream('./docs/bigblog2.txt')




// /*on is an event listener to the data event 
// by getting buffer data (chunk) we get access to it and use it 
// */
// // readStream.on('data', (chunk) => {
// //     console.log('new chunk')
// //     console.log(chunk)
// //     writeStream.write('\n NEW CHUNK \n')
// //     writeStream.write(chunk)
// // })


// //piping which does what the above does in a cleaner way 
// readStream.pipe(writeStream)
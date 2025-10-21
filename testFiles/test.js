const name = 'mario'
console.log(name)

const greet = (name) => {
    console.log(`hello , ${name}`)
}

greet('dhari')
greet('jack ')
console.log(global)

setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int)
}, 2000);

const int = setInterval(() => {
    console.log('in the interval')
}, 1000)

console.log(__dirname); //gets us the absolute path of current folder 
console.log(__filename); // gets us the absolute path of folder With the file name


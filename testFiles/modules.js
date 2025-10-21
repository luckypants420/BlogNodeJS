//destructuring Object 
const { people, ages } = require('./people');
console.log(people, ages)


//accessing the os object that is already in node which im importing here 
const os = require('os')
//using the os objects methods which gives
//  information of the current os that its runnig on
console.log(os.platform(), os.homedir())


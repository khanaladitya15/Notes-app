const chalk = require('chalk')
const getNotes = require('./notes')
const output = getNotes() 
console.log(output)



console.log(chalk.white.underline.bold('error!'));


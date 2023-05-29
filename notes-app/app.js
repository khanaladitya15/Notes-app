const chalk = require('chalk')
const getNotes = require('./notes')

const command  = process.argv[2]
console.log(process.argv)

if(command === 'add'){
    console.log(chalk.green.bold('Adding a new note . . .'))
}else if(command === 'remove'){
    console.log(chalk.red.bold('Removing the note.'))
}else{
    console.log(chalk.white.bold('Invalid selection ! '))
}

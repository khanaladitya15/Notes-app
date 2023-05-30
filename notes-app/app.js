const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// const command  = process.argv[2]
yargs.version('1.0.1')

// Create add note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        content:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string' || 'number'
        }
    },
    handler: function(argv){
        console.log(chalk.green.bold('Title: ' + argv.title + '\nNote: ' + argv.content))
    }
})

// Create remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function(){
        console.log(chalk.red.bold('Removing the note.'))
    }
})
// Create read note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log(chalk.white.bgBlack.bold('Read'))
    }
})
// Create list notes
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function(){
        console.log(chalk.yellow.bgWhite.bold('List notes'))
    }
})
console.log(yargs.argv)



/*
if(command === 'add'){
    console.log(chalk.green.bold('Adding a new note . . .'))
}else if(command === 'remove'){
    console.log(chalk.red.bold('Removing the note.'))
}else{
    console.log(chalk.white.bold('Invalid selection ! '))
}
*/


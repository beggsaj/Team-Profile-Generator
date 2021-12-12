//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const manager = require('./lib/manager')
const intern = require('./lib/intern')
const engineer = require('./lib/engineer')

//array of questions for user input
const questions = [{
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your employee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your office number:',
    },
    {
        type: 'checkbox',
        name: 'job',
        message: 'Select new team member:',
        choices: ['Engineer','Intern','Finish Building Team']
    }
];

// function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('saved')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile('index.html', generateHTML(userInput))
        })
}

// Function call to initialize app
init();
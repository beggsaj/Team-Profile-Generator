//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

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
        type: 'confirm',
        name: 'addteam',
        message: 'Do you need to add any additional team members',
    },
    {
        type: 'list',
        name: 'employeetype',
        message: 'Select new team member :',
        when: jobTitle('addteam'),
        choices: ['Engineer', 'Intern', 'Finish Building Team'],
    },
    {
        type: 'input',
        name: 'engineername',
        message: 'Enter Engineer Name',
        when: (answers) => answers.employeetype === 'Engineer'
    },
    {
        type: 'input',
        name: 'engineerid',
        message: 'Enter Engineer ID',
        when: (answers) => answers.employeetype === 'Engineer'
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: 'Enter Engineer Email',
        when: (answers) => answers.employeetype === 'Engineer'
    },
    {
        type: 'input',
        name: 'engineergithub',
        message: 'Enter Engineer Github',
        when: (answers) => answers.employeetype === 'Engineer'
    },
    {
        type: 'input',
        name: 'internname',
        message: 'Enter Intern Name',
        when: (answers) => answers.employeetype === 'Intern'
    },
    {
        type: 'input',
        name: 'internid',
        message: 'Enter Intern id',
        when: (answers) => answers.employeetype === 'Intern'
    },
    {
        type: 'input',
        name: 'internemail',
        message: 'Enter Intern Email',
        when: (answers) => answers.employeetype === 'Intern'
    },
    {
        type: 'input',
        name: 'internschool',
        message: 'Enter Intern School',
        when: (answers) => answers.employeetype === 'Intern'
    },
    {
        type: 'confirm',
        name: 'addteamagain',
        message: 'Do you need to add any additional team members',
    },
    
];


function jobTitle(add) {
    return function (answers) {
        return answers[add];
    };
}

// function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('saved')
    })
}

function generateHTML(data) {
    return `

    `
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
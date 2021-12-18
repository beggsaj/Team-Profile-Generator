//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const completeTeam = []
let manager;
let teamTitle

//array of questions for user input

function managerQuestions(){
    inquirer.prompt([
        {
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
        }        
    ]).then(managerResponses => {
        manager = new Manager(managerResponses.name,managerResponses.github,managerResponses.email,managerResponses.description)
        console.log('manager info complete, please input the following information for the rest of the team')
        employeeQuestions()
    })
}

function employeeQuestions(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeetype',
            message: 'Select new team member :',
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
        }
    ]).then(answers => {
        if (answers.employeeType === 'Intern'){
            const intern = new Intern(answers.internname, answers.internid, answers.internemail, answers.internschool)
            completeTeam.push(intern)
        } else if (answers.employeeType === 'Engineer') {
            const engineer = new Engineer (answers.engineername, answers.engineerid, answers.engineeremail, answers.engineergithub)
            completeTeam.push(engineer)
        } if (answers.addteamagain === true){
            employeeQuestions()
        } else {

            fs.writeFile('./index.html')
            
            console.log('please view index.html for the completed team')
        }
    })
}


// Function call to initialize app
managerQuestions()
//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

var completeTeam = []
let manager;

//array of questions for user input

function managerQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter your name:',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Enter your employee ID:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:',
        }        
    ]).then(managerResponses => {
        manager = new Manager(managerResponses.managerName,managerResponses.managerID,managerResponses.email,managerResponses.officeNumber)
        console.log('manager info complete, please input the following information for the rest of the team')
        employeeQuestions()
    })
}

function employeeQuestions(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Select new team member :',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
        },
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter Engineer Name',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Enter Engineer ID',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter Engineer Email',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Enter Engineer Github',
            when: (answers) => answers.employeeType === 'Engineer'
        },
        {
            type: 'input',
            name: 'internname',
            message: 'Enter Intern Name',
            when: (answers) => answers.employeeType === 'Intern'
        },
        {
            type: 'input',
            name: 'internid',
            message: 'Enter Intern id',
            when: (answers) => answers.employeeType === 'Intern'
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'Enter Intern Email',
            when: (answers) => answers.employeeType === 'Intern'
        },
        {
            type: 'input',
            name: 'internschool',
            message: 'Enter Intern School',
            when: (answers) => answers.employeeType === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addteamagain',
            message: 'Do you need to add any additional team members',
        }
    ]).then(answers => {
        console.log(answers.employeeType)
        if (answers.employeeType === 'Intern'){
            completeTeam.push(new Intern(answers.internname, answers.internid, answers.internemail, answers.internschool))
        } else if (answers.employeeType === 'Engineer') {
            completeTeam.push(new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub))
        } if (answers.addteamagain === true){
            employeeQuestions()
        } else {
            var home = fs.readFileSync('./templates/index.html','utf8')

            var managerCard = fs.readFileSync('./templates/Manager.html', 'utf8')
            managerCard = managerCard.replace('{{name}}', manager.getName());
            managerCard = managerCard.replace('{{managerID}}', manager.getID())
            managerCard = managerCard.replace('{{email}}', manager.getEmail())
            managerCard = managerCard.replace('{{description}}', manager.getOfficeNumber())


            var cards = managerCard
            console.log(completeTeam.length)
            for (var i = 0; i < completeTeam.length; i++) {
                var employee = completeTeam[i];
                cards += additionalEmployees(employee)
            }

            console.log(completeTeam)
            
            home = home.replace('{{cards}}', cards)

            fs.writeFileSync('./index.html', home)

            console.log('please view index.html for the completed team')
        }
    })
}

function additionalEmployees (employee) {
    if (employee.getRole() === 'Intern') {
        var intern =fs.readFileSync('./templates/Intern.html', 'utf8')
        intern = intern.replace('{{name}}', employee.getName());
        intern = intern.replace('{{ID}}', employee.getID())
        intern = intern.replace('{{email}}', employee.getEmail())
        intern = intern.replace('{{internschool}}', employee.getSchool())
        return intern
    }  
    else if (employee.getRole() === 'Engineer') {
        var engineer =fs.readFileSync('./templates/Engineer.html', 'utf8')
        engineer = engineer.replace('{{name}}', employee.getName());
        engineer = engineer.replace('{{ID}}', employee.getID())
        engineer = engineer.replace('{{email}}', employee.getEmail())
        engineer = engineer.replace('{{engineerGithub}}', employee.getGithub())
        return engineer
    }      
}

// Function call to initialize app
managerQuestions()
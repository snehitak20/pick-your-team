const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs');
const generateHTML = require('./src/generateHTML');


team = [];

// Manager Questions Here
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
        },
        {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Who else would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])

    .then ((managerAnswers) => {
    
        const manager = new Manager (managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generateHTML(team))
        }
    });
};
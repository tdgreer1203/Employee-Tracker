const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myStaff = [];

const promptForManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID? (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address? (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number? (Required)",
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log('Please enter the office number of the manager.');
                    return false;
                }
            }
        }
    ]);
};

const promptForNextStep = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'next',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'I"m Done. Get me out of here.'],
        }
    ]);
};

async function getTeam() {
    let isFinished = false;
    let manager = await promptForManager();
    myStaff.push(manager);

    while(!isFinished) {
        
    }
}

getTeam();
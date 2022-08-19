const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writeFile = require('./utils/write-file');
const generateHtml = require('./src/generate-html');

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

const promptForEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team engineer's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID? (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address? (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username? (Required)",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter the Github username of the engineer.');
                    return false;
                }
            }
        }
    ]);
};

const promptForIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team intern's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID? (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address? (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend? (Required)",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school of the intern.');
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
            choices: ['Add an Engineer', 'Add an Intern', "I'm Done. Get me out of here."],
        }
    ]);
};

async function getTeam() {
    let isFinished = false;
    let manager = await promptForManager();
    let newManager = new Manager(manager.name, manager.id, manager.email, manager.office);
    myStaff.push(newManager);

    while(!isFinished) {
        let next = await promptForNextStep();
        if(next.next === "Add an Engineer") {
            let engineer = await promptForEngineer();
            let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
            myStaff.push(newEngineer);
        } else if(next.next === "Add an Intern") {
            let intern = await promptForIntern();
            let newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
            myStaff.push(newIntern);
        } else {
            isFinished = true;
        }
    }
    
    let pageContent = await generateHtml(myStaff);
    writeFile(pageContent);
}

getTeam();
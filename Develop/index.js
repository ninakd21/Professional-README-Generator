// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter your GitHub Link (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Project Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instalattionInstructions',
        message: 'Please provide a list of the Steps for Installation (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Installation Instructions!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmImage',
        message: 'Would you like to add an image to the usage?',
    },
    {
        type: 'input',
        name: 'usageAltImage',
        message: 'Please enter the ALT Description. (Required)',
    },
    {
        type: 'input',
        name: 'usageImage',
        message: 'Please enter the URL (Required)',
    },
    {
        type: 'input',
        name: 'ussageInformation',
        message: 'What is the Usage Information (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Usage Information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Usage Information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add any tests that you conducted',
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to apply? (Check all that apply)',
        when: ({ confirmLicense }) => confirmLicense,
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'ISC',]
    },
]

// function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            const pageReadme = generateMarkdown(data);
            fs.writeFile(data.title + '.md', pageReadme, err => {
                if (err) throw new Error(err);
                console.log('Readme created! Check out README.md in this directory to see it')
            })
        })
}

// Function call to initialize app
init();
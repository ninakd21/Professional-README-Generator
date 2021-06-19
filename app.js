// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
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
        validate: githubInput => {
            if (githubInput) {
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
        message: 'What are the Installation Instructions (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Installation Instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ussageInformation',
        message: 'What is the Usage Information (Required)',
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
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license?',
        default: false
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to apply? (Check all that apply)',
        when: ({ confirmLicense }) => confirmLicense,
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    }
// TODO: Create a function to initialize app
function init() {
  // Prompt Inquirer questions
  const userResponses = inquirer.prompt(questions);
}

// Function call to initialize app
init();

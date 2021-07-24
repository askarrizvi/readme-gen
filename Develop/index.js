// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown.js');

var answers;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project (Required)',
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the instructions for installation? (Required)',
        validate: (installInput) => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information? (Required)',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines? (Required)',
        validate: (guideInput) => {
            if (guideInput) {
                return true;
            } else {
                console.log('Please enter the contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions? (Required)',
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter the test instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Choose the license for this project',
        name: 'license',
        choices: ['GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
        /*validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You must choose a license!');
                return false;
            }
        }*/
    },
    {
        type: 'input',
        name: 'gituser',
        message: 'What is your Github username? (Required)',
        validate: (userInput) => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName + '.md', data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("README", generateReadme(answers));
        })

}

// Function call to initialize app
init();
//console.log(answers);

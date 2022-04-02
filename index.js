// const readmeDataArgs = process.argv.slice(2);
// const { fstat } = require("fs");
// const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for this application
const promptQuestions = () => {
    
    // if (!readmeData.sections) {
    //     readmeData.sections = [];
    }
    console.log(`
    =================
    Build your README
    =================
    `);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
        validate: nameInput => {
            // console.log(nameInput);
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the name of the project");
            return false;
        }
    }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of the project (Required)',
        validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a brief description of your project');
            return false;
        };
    }
    },
    // '## Table of Contents',
    // '* [Installation](#installation)',
    // '* [Usage](#usage)',
    // '* [License](#license)',
    // '* [Contributors](#contributors)',
    // '* [Tests](#tests)',
    // '* [Questions](#questions)'
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions how to install your project (if necessary)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Add screenshots as necessary. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath add it to your README using the following syntax: <![alt text](assets/images/screenshot.png)'
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GPL", "GPLv3"],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Identify contributors here, if any'
        // default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any testing you have done in your project'
    },
    {
        type: 'inpuit',
        name: 'questions',
        message: 'Enter your email address to add a way to contact you with questions'
    }
])
// };

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/index.js', fileName, data, err => {
            // if there is an error, reject the Promise and send the error
            if (err) {
                reject(err);
                // return our of the function to stop the process
                return;
            }

            // if all is well, resolve the promise
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

promptQuestions()
.then(readmeData => {
    return generateMarkdown(readmeData);
    })
    .then(readmeData => {
        return writeFile('Readme.md');
    })
console.log(readmeData);
    

// TODO: Create function to initialize the app
// function init(generateMarkdown) {
//     promptQuestions();
// }



// console.log(generateMarkdown(title, description));












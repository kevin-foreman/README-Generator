// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown.js');


// Refactor, code is too complicated
// This will create an array of questions for the application

const questions = () => {

    console.log(`
    ======++++++======
    Create your README
    ======++++++======
    `),
    // Can't get this functino to work
    inquirer.prompt([

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
        type: 'input',
        name: 'questions',
        message: 'Enter your email address to add a way to contact you with questions'
    }
    // console.log(questions);
    ])
    .then((answers) => {
        console.log(generateMarkdown(answers))
        console.log(answers);  
        fs.writeFile('README.md', generateMarkdown(answers),

    function(err) {
        if (err) throw err;

        // if no error
        // console.log("Data written successfully")
        return;
    });     
    })
};


// Function to write README file



// function to initialize the app
// testing different methods
function init(questions) {
    // inquirer.prompt(questions);
    // .then((inquirerResponse, data) => {
        console.log("inquirer test");
    // })
};
questions();
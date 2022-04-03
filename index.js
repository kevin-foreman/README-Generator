// const readmeDataArgs = process.argv.slice(2);


// add in all the dependencies
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./utils/generateMarkdown.js');



// This will create an array of questions for the application
const promptQuestions = fileData => {
    
    if (!fileData) {
        fileData = [];
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
  .then(readmeData => {
     fileData.push(readmeData);
        return fileData;

})
};


// function to initialize the app
promptQuestions()
.then(fileData => {
    return generateFile(fileData);
    })
    .then(readmeData => {
        return writeFile('Readme.md');
    })
    .then(writeFileResponse => {
        // console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        // console.log(copyFileResponse);
    })
    .catch(err => {
        // console.log(err);
    })
// console.log(readmeData);

// console.log(fileData);














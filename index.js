const readmeDataArgs = process.argv.slice(2);
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for this application
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?'
        validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the name of the project")
        }
    };
    };
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of the project (Required)',
        validate: nameInput => {
        if (nameInpujt) => {
            return true;
        } else {
            console.log('Please enter a brief description of your project');
            return false;
        }
    }
    }
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions how to install your project (if necessary)'

        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
                 'Add screenshots as necessary.',
                 'To add a screenshot, create an `assets/images` folder in your repository',
                 'and upload your screenshot to it. Then, using the relative filepath,',
                 'add it to your README using the following syntax:',
                 '![alt text](assets/images/screenshot.png)'
    }
    {
        type: 'checkbox',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GPL", "GPLv3"],
        }
    {
        type: 'input',
        name: 'contributors',
        message: 'Identify contributors here, if any'
        default: false,
    }
    {
        type: 'input',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile ('README.md')
};

// TODO: Create function to initialize the app
function init() {

}


console.log(title, description);
console.log(generateReadme(title, description));












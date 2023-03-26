// Include packages needed for this application (dependencies)
import pkg from 'inquirer';
const { prompt } = pkg;
import { writeFile } from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';


// Refactored
// This will create an array of questions for the application

const questions = () => {

    console.log(`
    ======++++++======
    Create your README
    ======++++++======
    `),
    // Start prompting questions
    prompt([

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
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Make a note of this step, you will not input anything here, but if you want to add a screenshot to your project do the following: create an `assets/images` folder to your project inside the root folder, and upload your screenshot to it. Place this line of code in your README to link to the file <![alt text](assets/images/your-screenshot.png)>.'
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GPLv2", "GPLv3"],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Identify contributors here, if any'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any testing you have done in your project'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email address, and your GitHub username for a way to contact you with questions.'
    }
    
    ])
    // Function to write README file
    .then((answers) => {

        writeFile('README.md', generateMarkdown(answers),

    function(err) {
        if (err) throw err;

        // if no error
        console.log("README successfully created!")
        return;
    });     
    })
};

// function to initialize the app
questions();
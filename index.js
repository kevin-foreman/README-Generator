const readmeDataArgs = process.argv.slice(2, process.argv.length);
const fs = require('fs');
const inquirer = require('inquirer');


// const title = readmeDataArgs[0];
// const description = readmeDataArgs[1];
// destructured the above

// TODO: Create an array of questions for this application
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile ('README.md')
};

// TODO: Create function to initialize the app
function init() {

}

// Generate README by creating a .md file

// Add line breaks so the code is more readable
const generateReadme = (title, description) => {
    return `
    # Title
    ${title}

    ## Description
    ${description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * License
    * Contributors
    * Tests
    * Questions   
    ${tableOfContents}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributors
    ${contributors}

    ## Tests
    ${tests}
    // Contact information (email address) of the developer
    ## Questions
    ${questions}
    `;
}

console.log(title, description);
console.log(generateReadme(title, description));









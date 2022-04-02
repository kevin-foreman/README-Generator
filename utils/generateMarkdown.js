const fs = require('fs');


// const { fstat } = require("fs");
// const generateMarkdown = require();


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(License) {
//     if(license != '') {
//     return false;
//     } else {
//         ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
//     }

// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(License) {
    // if (license != '') {
    // } else {
    // return `
    // ## License
    // The license used for this project is [$(License)](#License)
    // `
    // }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(License) {}

// function renderLicense(License) {
//     if(license != 'None') {
//         } else {
//             `
//             The license used for this project is `

//         }
// }

// TODO: Create a function to generate markdown for README

const generateMarkdown = readMeArr => {
    return `
    ${readMeArr
        .map(({ title, description, installation, usage, license, contributors, tests, questions }) => {
        return `
    # Title
    ${data.title.join}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)
    * [Tests](#tests)
    * [Questions](#questions)   
    ${data.tableOfContents.join}

    ## Installation
    ${data.installation.join}

    ## Usage
    ${data.usage}

    ## License
    ${data.license.join(', ')}

    ## Contributors
    ${data.contributors}

    ## Tests
    ${data.tests}
    // Contact information (email address) of the developer
    ## Questions
    ${data.questions}
    }})
    `;
})
    .join('')}
    `;   
};

module.exports = generateMarkdown 


// => {
//     console.log(templateData);
//     const { title, description, installation, usage, license, contributors, tests, questions } = readmeData;
//     const generateFile = readmeArr => {
//         if (!readmeArr) {
//             return '';
//         }
//     }
// }

// fstat.writeFile
// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === undefined) {
    return '';
    } else if (license == 'MIT') {
        return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`

    } else if (license == 'Apache 2.0') {
        return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`
    
    } else if (license == 'GPLv2') {
        return `
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
`
    
    } else (license == 'GPLv3')
        return `
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
`
};


// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === undefined) {
    return '';
    } else if (license == 'MIT'){
        return `
## License
The license used for this project is [MIT License](https://opensource.org/licenses/MIT)
        `
    } else if (license == 'Apache 2.0') {
        return `
## License
The license used for this project is [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
        `
    } else if (license == 'GPLv2') {
        return `
## License
The license used for this project is [(License)](#license)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
        `
    } else (license == 'GPLv3')
        return `
## License
The license used for this project is [![(License)](#license)](https://www.gnu.org/licenses/gpl-3.0)
        `;
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license != undefined) {
        return`
The license used for this project is ${license}
`
}
};

// This function should generate markdown for README

function generateMarkdown(data) {
    return `
${renderLicenseBadge(data.license)}

# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Screenshot](#screenshot)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license) 

## Installation
${data.installation}

## Usage
${data.usage}

## Screenshot
${data.screenshot}

## Contributors
${data.contributors}

## Tests
${data.tests}

Contact information (email address & GitHub username) of the developer
## Questions
${data.questions}

## License
${renderLicenseSection(data.license)}
`;
};

// Export to the answers from index.js
export { generateMarkdown };
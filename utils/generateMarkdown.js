

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === undefined) {
    return '';
    } else if (license == 'MIT') {
        return `
        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)])
        `
    } else if (license == 'Apache 2.0') {
        return `
        [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
        `
    } else if (license == 'GPLv2') {
        return `
        [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]
        `
    } else (license == 'GPLv3')
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
    `;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (License != '') {
    } else if (license == 'MIT'){
        return `
        ## License
        The license used for this project is [![(License)](#License)https://www.gnu.org/licenses/gpl-3.0]
        `
    } else if (license == 'Apache 2.0') {
        return `
        ## License
        The license used for this project is [![(License)](#License)https://opensource.org/licenses/MIT]
        `
    } else if (license == 'GPLv2') {
        return `
        ## License
        The license used for this project is [![(License)]https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html]
        `
    } else (license == 'GPLv3')
        return `
        ## License
        The license used for this project is [![(License)]https://www.gnu.org/licenses/agpl-3.0]
        `;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license != 'None') {
        return ''
        } else 
        return `
        ## License
        The license used for this project is [![${License}](#license)]
        `
}

// This function should generate markdown for README

const generateMarkdown = (data) => {
    return `
    ${renderLicenseBadge(data.license)}
    # Title
    ${data.title}
    
    ## Description
    ${data.description}
        
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)
    * [Tests](#tests)
    * [Questions](#questions) 
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}

    ## License(s)
    ${data.license.join(', ')}

    ## Contributors
    ${data.contributors}

    ## Tests
    ${data.tests}

    // Contact information (email address & GitHub username) of the developer ## Questions
    ${data.questions}

    ${renderLicenseSection(data.license)}
    `;
}

// Export to the answers from index.js
module.exports = {generateMarkdown};

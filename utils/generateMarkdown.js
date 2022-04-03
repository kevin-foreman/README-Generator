

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
    if(license != '') {
    return false;
    } else {
        '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg'
    }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
    if (license != '') {
    } else {
    return `
    ## License
    The license used for this project is [$(License)](#License)
    `
    }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}
    function renderLicense(License) {
        if(license != 'None') {
        } else {
        `
        The license used for this project is `
    }
}

// This function should generate markdown for README

const generateMarkdown = (data) => {
    return `
        
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

    ## License
    ${data.license.join(', ')}

    ## Contributors
    ${data.contributors}

    ## Tests
    ${data.tests}

    // Contact information (email address) of the developer
    ## Questions
    ${data.questions},

    }})

    `;
}

module.exports = {generateMarkdown};
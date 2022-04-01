const fs = require('fs');
const { fstat } = require("fs");
const generateMarkdown = require(g);


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license != '') {
    return false;
    } else {
        // ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
    };

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license != '') {
    } else {

    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
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
};


function renderLicense(license) {
    if(license != 'None') {
        } else {

        }
}

module.exports = { writeFile, copyFile };

fstat.writeFile
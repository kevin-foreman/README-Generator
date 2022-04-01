const readmeDataArgs = process.argv.slice(2, process.argv.length);
const inquirer = require(inquirer);


// const title = readmeDataArgs[0];
// const description = readmeDataArgs[1];
// destructured the above

// set an array of arrays to hold each section header
const [title,
        description,
        tableContents,
        // [
        // tableInstallation,
        // tableUsage,
        // tableLicense,
        // tableContributors,
        // tableTests,
        // tableQuestions
        // ],
        installation,
        usage,
        license,
        contributors,
        tests,
        questions
        ] = readmeDataArgs;

// Generate README by creating a .md file

// Add line breaks so the code is more readable
const generateReadme = (title, description) => {
    return `
    # ${title}

    ## ${description}

    ## ${tableContents}

    ## ${installation}

    ## ${usage}

    ## ${license}

    ## ${contributors}

    ## ${tests}

    ## ${questions}
    `;
}

console.log(title, description);
console.log(generateReadme(title, description));









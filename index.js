const readmeDataArgs = process.argv.slice(2, process.argv.length);


// const title = readmeDataArgs[0];
// const description = readmeDataArgs[1];
// destructured the above
const [title, description] = readmeDataArgs;

// Generate README by creating a .md file

// Add line breaks so the code is more readable
const generateReadme = (title, description) => {
    return `
    Title: ${title}
    Description: ${description}
    `;
}

console.log(title, description);
console.log(generateReadme(title, description));









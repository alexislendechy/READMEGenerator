
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What's your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What's your project's name?",
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license do you choose for your project?",
        choices: ['APACHE2.0', 'GNU3.0', 'MIT', 'Boost1.0']
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a description for your project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide the installation instructions for this project",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide usage information",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please provide contribution guidelines",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please provide test instructions",
    },
]

inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});


const generateReadme = ({github, email, title, license, description, installation, usage, contribution}) =>
` # ${title} [![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
 
**Note**
This application is cover under ${license} license. 
 

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Questions

For any inquire, please contact me at ${email} or visit my [GitHub](https://github.com/${github})
`;




// Calls inquirer package 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Name:',
        name: 'title'
    },
    {
        type: 'input',
        message:'Description:',
        name: 'description'
    },
    {
        type:'input',
        message: 'Installation:',
        name:'installation',
        default:'npm i'
    },
    {
        type:'input',
        message:'Usage:',
        name:'usage',
        default: 'N/A'
    },
    {
        type:'input',
        message:'Contributions:',
        name:'contributions',
        default:'N/A'
    },
    {
        type:'list',
        message: 'Licence:',
        name:'license',
        choices: ['MIT','Apache 2.0','BSD 2','BSD 3','Mozzila Public Licence','None']
    },
    {
        type: 'input',
        message:'Github:',
        name:'username'
    },
    {
        type:'input',
        message :'Email:',
        name:'email'
    }
];

//Function to write the README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data, err => err ? console.error(err) : console.log('Success!') );
}

// A function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
    {
            const readmeData = generateMarkdown(response);
            writeToFile('README',readmeData);

    })

}

// Initializes the application
init();




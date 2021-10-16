const Employee = require("./lib/Employee");

// Initialize a new Employee object ===== finish editing 
// const game = new Game();

// // Start playing
// game.play();


// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template.js');
//add genmarkdown


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Please enter the file name of your read-me.",
        name: "file"
    },

    {
        type: 'list',
        message: "What file format do you want for your readme?",
        name: "fileType",
        choices: [".txt", ".md"]
    },

    {
        type: 'input',
        message: "Whats the title of your project?",
        name: "project"
    },



    {
        type: 'input',
        message: "Provide a description of your project.",
        name: "description"
    },

    {
        type: 'input',
        message: "Installation: How do you install your application?",
        name: "installation"
    },

    {
        type: 'input',
        message: "Instructions",
        name: "instructions"
    },

    {
        type: 'input',
        message: "Usage",
        name: "usage"
    },

    {
        type: 'input',
        message: "Contribution Guidelines",
        name: "contribution"
    },

    {
        type: 'input',
        message: "Testing instructions",
        name: "testing"
    },

    {
        type: 'list',
        message: "Select your License",
        name: "license",
        choices: ["MIT", "MPL 2.0", "GPL v2", "none"]

    }

];

inquirer
    .prompt(questions)
    .then((answers) =>  writeToFile(`${answers.file}${answers.fileType}`, generateMarkdown(answers)))
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



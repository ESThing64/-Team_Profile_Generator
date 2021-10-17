const Employee = require("./lib/Employee");
const fs = require('fs');
const inquirer = require('inquirer');
const team = require('./src/page-template.js');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const teamArry = []
const managerQuestions = require('./src/questions/managerQuestions');
const internQuestions = require('./src/questions/internQuestions');
const engineerQuestions = require('./src/questions/engineerQuestions');
let generateHTML = team;


function init() {

    inquirer
        .prompt(managerQuestions)
        .then((answers) => {

            const newM = new Manager(`${answers.mName}`, `${answers.mId}`, `${answers.mEmail}`, `${answers.mONumber}`)

            if (`${answers.tMember}` == "Engineer") {
                newEng();
                teamArry.push(newM)
            } else if (`${answers.tMember}` == "Intern") {
                newIn()
                teamArry.push(newM)
                return
            } else {
      teamArry.push(newM)
                save()
                return
            }

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

function newEng() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {

            const newEn = new Engineer(`${answers.mName}`, `${answers.mId}`, `${answers.mEmail}`, `${answers.enGit}`)

            if (`${answers.tMember}` == "Engineer") {
                newEng();
                teamArry.push(newEn)
                return

            } else if (`${answers.tMember}` == "Intern") {
                newIn()
                teamArry.push(newEn)
                return

            } else {
                
                teamArry.push(newEn)

                save()
                return
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

function newIn() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {

            const newIn = new Intern(`${answers.mName}`, `${answers.mId}`, `${answers.mEmail}`, `${answers.iSchool}`)

            if (`${answers.tMember}` == "Engineer") {
                newEng();
                teamArry.push(newIn)
                return

            } else if (`${answers.tMember}` == "Intern") {
                newIn()
                teamArry.push(newIn)
                return

            } else {

                teamArry.push(newIn)

                save()
                return
            }

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}


function save() {

    fs.writeFile("test.html", generateHTML(teamArry), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}


// Function call to initialize app
init();

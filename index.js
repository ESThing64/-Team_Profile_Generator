const Employee = require("./lib/Employee");
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const managerQuestions = require('./src/questions/managerQuestions');
const internQuestions = require('./src/questions/internQuestions');
const engineerQuestions = require('./src/questions/engineerQuestions');
const teamArry = []

const team = require('./src/page-template.js');
let generateHTML = team;


function init() {

    inquirer
        .prompt(managerQuestions)
        .then((answers) => {

            const newM = new Manager(`${answers.mName}`, `${answers.mId}`, `${answers.mEmail}`, `${answers.mONumber}`)

            if (`${answers.tMember}` == "Engineer") {
                teamArry.push(newM)
                newEng();
            } else if (`${answers.tMember}` == "Intern") {
                teamArry.push(newM)
                newIn()
                
            } else {
      teamArry.push(newM)
                save()
                
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
                teamArry.push(newEn)
                newEng();
                

            } else if (`${answers.tMember}` == "Intern") {
                teamArry.push(newEn)
                newIn()
                

            } else {
                
                teamArry.push(newEn)

                save()
                
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

            console.log(answers)

            const newIn = new Intern(`${answers.iName}`, `${answers.iId}`, `${answers.iEmail}`, `${answers.iSchool}`)

          if (`${answers.iMember}` == "Intern") {
            teamArry.push(newIn)
            newIn()
            


         } else if (`${answers.iMember}` == "Engineer") {
                teamArry.push(newIn)
                newEng();
                


            } else if(`${answers.iMember}` == "I'm finshed") {

                teamArry.push(newIn)

                save()
                
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


// Function call to initialize app, this starts with the manger
init();



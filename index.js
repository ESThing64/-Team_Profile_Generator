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
                newInt()
                
            } else {
      teamArry.push(newM)
                save()
                
            }

        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment")
           } else {
                console.log("Something else went wrong")
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
                newInt()
                

            } else {
                
                teamArry.push(newEn)

                save()
                
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment")
            } else {
                console.log("Something else went wrong")
            }
        });
}





function newInt() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {

           

            const newIn = new Intern(`${answers.iName}`, `${answers.iId}`, `${answers.iEmail}`, `${answers.iSchool}`)

          if (`${answers.iMember}` == "Intern") {
            teamArry.push(newIn)
            newInt()
            


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
                console.log("Prompt couldn't be rendered in the current environment")
            } else {
                console.log("Something else went wrong")
            }
        });

}


function save() {

    fs.writeFile("./output/index.html", generateHTML(teamArry), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}


// Function call to initialize app, this starts with the manger
init();



const Employee = require("./lib/Employee");
const fs = require('fs');
const inquirer = require('inquirer');
const team = require('./src/page-template.js');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const teamArry = []
//add genmarkdown

// confirm.log(team.GenerateTeam())
const test = new Manager("John", "1", "coakleymjohn@gmail.com", "104")

let generateHTML = team

console.log(generateHTML([test]))



// console.log(hi([test]));

// console.log(hi())
// console.log(test)
// console.log(test)
// TODO: Create an array of questions for user input
const mQuestions = [


    {
        type: 'input',
        message: "What is the team manager's name?",
        name: "mName"
    },


    {
        type: 'input',
        message: "What is the team manager's id?",
        name: "mId"
    },


    {
        type: 'input',
        message: "What is the team manager's email?",
        name: "mEmail"
    },


    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: "mONumber"
    },


    {
        type: 'list',
        message: "Which type of Member would you like to add to the team?",
        name: "tMember",
        choices: ["Engineer", "Intern", "I'm finshed"]

    }

];

const iQuestions = [{
    type: 'input',
    message: "Which school is the intern attending?",
    name: "iSchool"
}, ...mQuestions

]

const enQuestions = [{
    type: 'input',
    message: "What is the engineer's git hub profile?",
    name: "enGit"
}, ...mQuestions

]






function init() {

    inquirer
        .prompt(mQuestions)
        .then((answers) => {



            const newM = new Manager(`${answers.mName}`, `${answers.mId}`, `${answers.mEmail}`, `${answers.mONumber}`)


            if (`${answers.tMember}` == "Engineer") {
                newEng();
                teamArry.push(newM)
                return

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

// Function call to initialize app
init();



function newEng() {

    inquirer
        .prompt(enQuestions)
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
        .prompt(iQuestions)
        .then((answers) => {

            // `${answers.mONumber}`

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

const managerQuestions = [


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

const internQuestions = [


    {
        type: 'input',
        message: "What is the intern's name?",
        name: "mName"
    },


    {
        type: 'input',
        message: "What is the intern's id?",
        name: "mId"
    },


    {
        type: 'input',
        message: "What is the intern's email?",
        name: "mEmail"
    },


    {
        type: 'input',
        message: "Which school is the intern attending?",
    name: "iSchool"
    },


    {
        type: 'list',
        message: "Which type of Member would you like to add to the team?",
        name: "tMember",
        choices: ["Engineer", "Intern", "I'm finshed"]

    }

];

const  engineerQuestions = [


    {
        type: 'input',
        message: "What is the engineer's name?",
        name: "mName"
    },


    {
        type: 'input',
        message: "What is the engineer's id?",
        name: "mId"
    },


    {
        type: 'input',
        message: "What is the engineer's email?",
        name: "mEmail"
    },


    {
        type: 'input',
        message: "What is the engineer's git hub profile?",
        name: "enGit"
    },


    {
        type: 'list',
        message: "Which type of Member would you like to add to the team?",
        name: "tMember",
        choices: ["Engineer", "Intern", "I'm finshed"]

    }

];


module.exports = managerQuestions
module.exports = internQuestions
module.exports = engineerQuestions
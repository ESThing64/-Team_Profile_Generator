module.exports = [


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
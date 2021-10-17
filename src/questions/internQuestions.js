module.exports = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: "iName"
    },


    {
        type: 'input',
        message: "What is the intern's id?",
        name: "iId"
    },


    {
        type: 'input',
        message: "What is the intern's email?",
        name: "iEmail"
    },


    {
        type: 'input',
        message: "Which school is the intern attending?",
    name: "iSchool"
    },

    {
        type: 'list',
        message: "Which type of Member would you like to add to the team?",
        name: "iMember",
        choices: ["Engineer", "Intern", "I'm finshed"]

    }

];
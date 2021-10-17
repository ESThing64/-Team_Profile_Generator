module.exports = [
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
module.exports = engineerQuestions = [


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
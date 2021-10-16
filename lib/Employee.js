const inquirer = require("inquirer");
// const chalk = require("chalk"); Do i need another one? jest?
// const Engineer = require("./lib/Engineer.js");
// const Intern = require("./lib/Intern.js");
// const Manager = require("./lib/Manager.js");
// const pageTemplate = require("./src/page-template.js");



class Employee {

    constructor(name, id, email) {

        this.name = name
        this.id = id
        this.email = email


    }

    getName() {

        return this.name

    }

    getId() {

        return this.id

    }
    getEmail() {

        return this.email

    }

    getRole() {
        return "Employee"
    }


}


module.exports = Employee;
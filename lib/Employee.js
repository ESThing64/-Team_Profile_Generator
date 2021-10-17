// const inquirer = require("inquirer");
// const Engineer = require("./Engineer.js");
// const Intern = require("./Intern.js");
// const Manager = require("./Manager.js");
// const pageTemplate = require("../src/page-template.js");



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
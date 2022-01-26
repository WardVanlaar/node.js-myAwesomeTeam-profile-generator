const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class Team {
  constructor() {
    this.manager = [];
  }

  initializeTeamManager() {
    inquirer
      .prompt({
        type: "text",
        name: "managerName",
        message: "What is the Team Manager's name?",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter the Team Manager's name!");
            return false;
          }
        },
      })
      .then(({ managerName }) => {
        this.manager = new Manager(managerName);
        console.log(this.manager);
        this.addManagerID();
      });
  }

  addManagerID() {
    inquirer
      .prompt({
        type: "text",
        name: "managerID",
        message: "What is the Team Manager's ID #?",
        validate: (managerIDInput) => {
          if (managerIDInput) {
            return true;
          } else {
            console.log("Please enter the Team Manager's ID #!");
            return false;
          }
        },
      })
      .then(({ managerID }) => {
        this.manager.id = managerID;
        console.log(this.manager);
        this.addManagerEmail();
      });
  }

  addManagerEmail() {
    inquirer
      .prompt({
        type: "text",
        name: "managerEmail",
        message: "What is the Team Manager's email?",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter the Team Manager's email!");
            return false;
          }
        },
      })
      .then(({ managerEmail }) => {
        this.manager.email = managerEmail;
        console.log(this.manager);
        this.addManagerOfficeNumber();
      });
  }

  addManagerOfficeNumber() {
    inquirer
      .prompt({
        type: "text",
        name: "managerOfficeNumber",
        message: "What is the Team Manager's office number?",
        validate: (managerOfficeNumberInput) => {
          if (managerOfficeNumberInput) {
            return true;
          } else {
            console.log("Please enter the Team Manager's office number!");
            return false;
          }
        },
      })
      .then(({ managerOfficeNumber }) => {
        this.manager.officeNumber = managerOfficeNumber;
        console.log(this.manager);
      });
  }
}
module.exports = Team;

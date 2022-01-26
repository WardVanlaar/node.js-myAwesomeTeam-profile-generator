const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

class Team {
  constructor() {
    this.manager = {};
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
          if (!managerIDInput || managerIDInput < 0) {
            console.log(
              "Please enter the Team Manager's ID #, greater than zero!"
            );
            return false;
          } else {
            return true;
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
          if (!managerOfficeNumberInput || managerOfficeNumberInput < 0) {
            console.log(
              "Please enter the Team Manager's office number, greater than zero!"
            );
            return false;
          } else {
            return true;
          }
        },
      })
      .then(({ managerOfficeNumber }) => {
        this.manager.officeNumber = managerOfficeNumber;
        console.log(this.manager);
        this.addEngineerOrIntern();
      });
  }

  addEngineerOrIntern() {
    inquirer
      .prompt({
        type: "confirm",
        name: "confirmEorI",
        message: "Would you like to add an engineer or intern?",
        default: true,
      })
      .then(({ confirmEorI }) => {
        if (!confirmEorI) {
          console.log("no engineer or intern");
        } else {
          inquirer
            .prompt({
              type: "list",
              name: "engineerOrIntern",
              message: "Please select engineer or intern.",
              choices: ["engineer", "intern"],
              when: ({ confirmEorI }) => confirmEorI,
            })
            .then(({ engineerOrIntern }) => {
              if (engineerOrIntern === "engineer") {
                console.log("engineer");
              } else {
                console.log("intern");
              }
            });
        }
      });
  }
}
module.exports = Team;

//     .then(({ action2 }) => {
//       if (action2 === "engineer") {
//         inquirer.prompt([
//           {
//             type: "text",
//             name: "engineerName",
//             message: "What is the engineer's name?",
//             validate: (engineerNameInput) => {
//               if (engineerNameInput) {
//                 return true;
//               } else {
//                 console.log("Please enter the engineer's name!");
//                 return false;
//               }
//             },
//           },
//         ]);
//         this.engineer = new Engineer(engineerName);
//         console.log(this.engineer);
//       } else if (action2 === "intern") {
//         inquirer.prompt([
//           {
//             type: "text",
//             name: "internName",
//             message: "What is the intern's name?",
//             validate: (internNameInput) => {
//               if (internNameInput) {
//                 return true;
//               } else {
//                 console.log("Please enter the intern's name!");
//                 return false;
//               }
//             },
//           },
//         ]);
//         this.intern = new Intern(internName);
//         console.log(this.intern);
//       }
//     });

// .then(({ confirmEorI }) => {
//   if (!confirmEorI) {
//     // return generateTeam(teamData);
//   } else {
//     console.log("test");
//       inquirer
//         .prompt({

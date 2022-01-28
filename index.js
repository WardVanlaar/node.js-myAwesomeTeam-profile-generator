//My original code is below on line 216. It's commented out and replaced with DRY-er code adapted
//from https://github.com/nicolewallace09/team-profile-generator

// link to page creation
const generateHTML = require('./src/page-template');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// link to fs module
const { writeFile } = require('./utils/generate-site');

// team array
const teamArray = []; 

// start of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });


// class Team {

//   initializeTeamManager() {
//     inquirer
//       .prompt({
//         type: "text",
//         name: "managerName",
//         message: "What is the Team Manager's name?",
//         validate: (managerNameInput) => {
//           if (managerNameInput) {
//             return true;
//           } else {
//             console.log("Please enter the Team Manager's name!");
//             return false;
//           }
//         },
//       })
//       .then(({ managerName }) => {
//         this.manager = new Manager(managerName);
//         console.log(this.manager);
//         this.addManagerID();
//       });
//   }

//   addManagerID() {
//     inquirer
//       .prompt({
//         type: "text",
//         name: "managerID",
//         message: "What is the Team Manager's ID #?",
//         validate: (managerIDInput) => {
//           if (!managerIDInput || managerIDInput < 0) {
//             console.log(
//               "Please enter the Team Manager's ID #, greater than zero!"
//             );
//             return false;
//           } else {
//             return true;
//           }
//         },
//       })
//       .then(({ managerID }) => {
//         this.manager.id = managerID;
//         console.log(this.manager);
//         this.addManagerEmail();
//       });
//   }

//   addManagerEmail() {
//     inquirer
//       .prompt({
//         type: "text",
//         name: "managerEmail",
//         message: "What is the Team Manager's email?",
//         validate: (managerEmailInput) => {
//           if (managerEmailInput) {
//             return true;
//           } else {
//             console.log("Please enter the Team Manager's email!");
//             return false;
//           }
//         },
//       })
//       .then(({ managerEmail }) => {
//         this.manager.email = managerEmail;
//         console.log(this.manager);
//         this.addManagerOfficeNumber();
//       });
//   }

//   addManagerOfficeNumber() {
//     inquirer
//       .prompt({
//         type: "text",
//         name: "managerOfficeNumber",
//         message: "What is the Team Manager's office number?",
//         validate: (managerOfficeNumberInput) => {
//           if (!managerOfficeNumberInput || managerOfficeNumberInput < 0) {
//             console.log(
//               "Please enter the Team Manager's office number, greater than zero!"
//             );
//             return false;
//           } else {
//             return true;
//           }
//         },
//       })
//       .then(({ managerOfficeNumber }) => {
//         this.manager.officeNumber = managerOfficeNumber;
//         console.log(this.manager);
//         this.addEngineerOrIntern();
//       });
//   }

//   addEngineerOrIntern() {
//     inquirer
//       .prompt({
//         type: "confirm",
//         name: "confirmEorI",
//         message: "Would you like to add an engineer or intern?",
//         default: true,
//       })
//       .then(({ confirmEorI }) => {
//         if (!confirmEorI) {
//           console.log("no engineer or intern");
//         } else {
//           inquirer
//             .prompt({
//               type: "list",
//               name: "engineerOrIntern",
//               message: "Please select engineer or intern.",
//               choices: ["engineer", "intern"],
//             })
//             .then(({ engineerOrIntern }) => {
//               if (engineerOrIntern === "engineer") {
//                 inquirer
//                   .prompt([
//                     {
//                       type: "text",
//                       name: "engineerName",
//                       message: "What is the engineer's name?",
//                       validate: (engineerNameInput) => {
//                         if (engineerNameInput) {
//                           return true;
//                         } else {
//                           console.log("Please enter the engineer's name!");
//                           return false;
//                         }
//                       },
//                     },
//                   ])
//                   .then(({ engineerName }) => {
//                     this.engineer = new Engineer(engineerName);
//                     console.log(this.engineer);

//                     inquirer
//                       .prompt({
//                         type: "text",
//                         name: "engineerID",
//                         message: "What is the engineer's ID #?",
//                         validate: (engineerIDInput) => {
//                           if (!engineerIDInput || engineerIDInput < 0) {
//                             console.log(
//                               "Please enter the engineer's ID #, greater than zero!"
//                             );
//                             return false;
//                           } else {
//                             return true;
//                           }
//                         },
//                       })
//                       .then(({ engineerID }) => {
//                         this.engineer.id = engineerID;
//                         console.log(this.engineer);

//                         inquirer
//                           .prompt({
//                             type: "text",
//                             name: "engineerEmail",
//                             message: "What is the engineer's email address?",
//                             validate: (engineerEmailInput) => {
//                               if (!engineerEmailInput) {
//                                 console.log(
//                                   "Please enter the engineer's email address!"
//                                 );
//                                 return false;
//                               } else {
//                                 return true;
//                               }
//                             },
//                           })
//                           .then(({ engineerEmail }) => {
//                             this.engineer.email = engineerEmail;
//                             console.log(this.engineer);

//                             inquirer
//                               .prompt({
//                                 type: "text",
//                                 name: "engineerGitHub",
//                                 message:
//                                   "What is the engineer's GitHub profile?",
//                                 validate: (engineerGitHubInput) => {
//                                   if (!engineerGitHubInput) {
//                                     console.log(
//                                       "Please enter the engineer's GitHub profile!"
//                                     );
//                                     return false;
//                                   } else {
//                                     return true;
//                                   }
//                                 },
//                               })
//                               .then(({ engineerGitHub }) => {
//                                 this.engineer.gitHub = engineerGitHub;
//                                 console.log(this.engineer);
//                                 this.checkTeamComplete();
//                               });
//                           });
//                       });
//                   });
//               } else {
//                 inquirer
//                   .prompt([
//                     {
//                       type: "text",
//                       name: "internName",
//                       message: "What is the intern's name?",
//                       validate: (internNameInput) => {
//                         if (internNameInput) {
//                           return true;
//                         } else {
//                           console.log("Please enter the intern's name!");
//                           return false;
//                         }
//                       },
//                     },
//                   ])
//                   .then(({ internName }) => {
//                     this.intern = new Intern(internName);
//                     console.log(this.intern);

//                     inquirer
//                       .prompt({
//                         type: "text",
//                         name: "internID",
//                         message: "What is the intern's ID #?",
//                         validate: (internIDInput) => {
//                           if (!internIDInput || internIDInput < 0) {
//                             console.log(
//                               "Please enter the intern's ID #, greater than zero!"
//                             );
//                             return false;
//                           } else {
//                             return true;
//                           }
//                         },
//                       })
//                       .then(({ internID }) => {
//                         this.intern.id = internID;
//                         console.log(this.intern);

//                         inquirer
//                           .prompt({
//                             type: "text",
//                             name: "internEmail",
//                             message: "What is the intern's email address?",
//                             validate: (internEmailInput) => {
//                               if (!internEmailInput) {
//                                 console.log(
//                                   "Please enter the intern's email address!"
//                                 );
//                                 return false;
//                               } else {
//                                 return true;
//                               }
//                             },
//                           })
//                           .then(({ internEmail }) => {
//                             this.intern.email = internEmail;
//                             console.log(this.intern);

//                             inquirer
//                               .prompt({
//                                 type: "text",
//                                 name: "internSchool",
//                                 message: "What is the intern's school?",
//                                 validate: (internSchoolInput) => {
//                                   if (!internSchoolInput) {
//                                     console.log(
//                                       "Please enter the intern's school!"
//                                     );
//                                     return false;
//                                   } else {
//                                     return true;
//                                   }
//                                 },
//                               })
//                               .then(({ internSchool }) => {
//                                 this.intern.school = internSchool;
//                                 console.log(this.intern);
//                                 this.checkTeamComplete();
//                               });
//                           });
//                       });
//                   });
//               }
//             });
//         }
//       });
//   }

//   checkTeamComplete() {
//     this.addEngineerOrIntern();
//   }
// }


// new Team().initializeTeamManager()
//   .then(teamData => {
//     return generatePage(teamData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// module.exports = Team;
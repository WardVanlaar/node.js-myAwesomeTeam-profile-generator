const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);

    this.gitHub = gitHub;
  }

  isValid() {
    if (this.officeNumber < 0) {
      return false;
    }
    return true;
  }

  getName() {
    return `Name: ${this.name}.`;
  }

  getId() {
    return `ID #: ${this.id}.`;
  }

  getEmail() {
    return `Email: ${this.email}`;
  }

  getGitHub() {
    return `GitHub profile: ${this.gitHub}`;
  }
}

module.exports = Engineer;
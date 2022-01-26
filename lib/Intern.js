const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
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

  getSchool() {
    return `School: ${this.school}`;
  }
}

module.exports = Intern;
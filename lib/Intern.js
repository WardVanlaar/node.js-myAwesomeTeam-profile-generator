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
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"
  }
}

module.exports = Intern;
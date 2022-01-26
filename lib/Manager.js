const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // isValid() {
  //   if (this.id < 0) {
  //     return false;
  //   }
  //   return true;
  // }

  // isValid() {
  //   if (this.officeNumber < 0) {
  //     return false;
  //   }
  //   return true;
  // }

  // getName() {
  //   return `Name: ${this.name}.`;
  // }

  // getId() {
  //   return `ID #: ${this.id}.`;
  // }

  // getEmail() {
  //   return `Email: ${this.email}`;
  // }

  // getOfficeNumber() {
  //   return `Office Number: ${this.officeNumber}`;
  // }
}

module.exports = Manager;

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    isValid() {
        if (this.id < 0) {
            return false;
          }
          return true;
        }
}

module.exports = Employee
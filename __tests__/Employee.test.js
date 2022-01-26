const Employee = require("../lib/Employee.js");

test("creates an Employee object", () => {
  const employee = new Employee("Ward", "2", "wardv@tirf.ca");

  expect(employee.name).toEqual("Ward");
  expect(employee.id).toEqual("2");
  expect(employee.email).toEqual("wardv@tirf.ca");
});

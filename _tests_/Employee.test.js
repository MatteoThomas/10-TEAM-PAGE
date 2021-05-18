const Employee = require("../lib/employee");

test("set name from constructor arguments", () => {
  const name = "Matty";
  const e = new Employee(name);
  expect(e.name).toBe(name)
})

test("set id from constructor argument", () => {
  const testValue = 69;
  const e = new Employee("test", testValue);
  expect(e.id).toBe(testValue);
})
/*
test("can set email from  constructor argument", () => {
  const testValue = "matty@ell.com.com";
  const e = new Employee("test", 1, testValue);
  expect(e.email).toBe(testValue);
})
*/
test("can get name  from  getName function", () => {
  const testValue = "Matty";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
})
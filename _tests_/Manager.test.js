const Manager = require('../lib/manager');

test("set office number from constructor arguments", () => {
  const testValue = 69;
  const e = new Manager("test", 1, "matty@ell.com", testValue);
  expect(e.office).toBe(testValue)
})

test("getRole function  should return manager", () => {
  const testValue = "Manager";
  const e = new Manager("test", 1, "matty@ell.com", testValue);
  expect(e.getRole()).toBe(testValue);
})

test("gets office number from getOffice function", () => {
  const testValue = 69;
  const e = new Manager("test", 1, "matty@ell.com", testValue);
  expect(e.getOffice()).toBe(testValue);
})
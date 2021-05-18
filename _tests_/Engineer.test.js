const Engineer = require("../lib/engineer");

test("sets Github user name from constructor arguments", () => {
  const testValue = "Github";
  const e = new Engineer("test", 1, "matty@ell.com", testValue);
  expect(e.github).toBe(testValue)
})

test("getRole function  should return Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("test", 1, "matty@ell.com", "Github");
  expect(e.getRole()).toBe(testValue);
})

test("can get github user name from getGithub function", () => {
  const testValue = 69;
  const e = new Engineer("foo", 1, "matty@ell.com", testValue);
  expect(e.getGithub()).toBe(testValue);
})
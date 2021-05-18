const Intern = require("../lib/intern");


test("sets school name from constructor arguments", () => {
    const testValue = "school";
    const e = new Intern("test", 1, "matty@ell.com", testValue);
    expect(e.school).toBe(testValue)
})

test("getRole function  should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("test", 1, "matty@ell.com", "school");
    expect(e.getRole()).toBe(testValue);
})

test("gets school name from getSchool function", () => {
    const testValue = "schoolName";
    const e = new Intern("test", 1, "matty@ell.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})
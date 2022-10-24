const Intern = require("../lib/Intern");

test("creates a new Intern", () => {
	const intern = new Intern("mark", "0", "mark@here.com", "Hunter");

	expect(intern.name).toBe("mark");
	expect(intern.id).toBe("0");
	expect(intern.email).toBe("mark@here.com");
	expect(intern.school).toBe("Hunter");
});

test("checks to see if getSchool() returns intern's school", () => {
	const intern = new Intern("mark", "0", "mark@here.com", "Hunter");

	expect(intern.getSchool()).toEqual(expect.stringContaining("Hunter"));
});

test("checks to see if getRole() returns intern", () => {
	const intern = new Intern("mark", "0", "mark@here.com", "Hunter");

	expect(intern.getRole()).toEqual(expect.stringContaining("intern"));
});

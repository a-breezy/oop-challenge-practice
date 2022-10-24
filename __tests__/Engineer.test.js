const Engineer = require("../lib/Engineer");

test("creates a new Engineer", () => {
	const engineer = new Engineer("mark", "0", "mark@here.com", "mark2255");

	expect(engineer.name).toBe("mark");
	expect(engineer.id).toBe("0");
	expect(engineer.email).toBe("mark@here.com");
	expect(engineer.github).toBe("mark2255");
});

test("checks to see if getGithub() returns employees github username", () => {
	const engineer = new Engineer("mark", "0", "mark@here.com", "mark2255");

	expect(engineer.getGithub()).toEqual(expect.stringContaining("mark2255"));
});

test("checks to see if getRole() returns engineer", () => {
	const engineer = new Engineer("mark", "0", "mark@here.com", "mark2255");

	expect(engineer.getRole()).toEqual(expect.stringContaining("engineer"));
});

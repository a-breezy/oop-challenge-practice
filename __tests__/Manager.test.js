const Manager = require("../lib/Manager");

test("creates a new Manager", () => {
	const manager = new Manager("mark", "0", "mark@here.com", "404");

	expect(manager.name).toBe("mark");
	expect(manager.id).toBe("0");
	expect(manager.email).toBe("mark@here.com");
	expect(manager.officeNumber).toBe("404");
});

test("checks to see if getRole() returns manager", () => {
	const manager = new Manager("mark", "0", "mark@here.com", "404");

	expect(manager.getRole()).toEqual(expect.stringContaining("manager"));
});

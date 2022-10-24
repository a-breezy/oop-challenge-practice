const Employee = require("../lib/Employee");

test("creates a new Employee", () => {
	const employee = new Employee("mark", "0", "mark@here.com");

	expect(employee.name).toBe("mark");
	expect(employee.id).toBe("0");
	expect(employee.email).toBe("mark@here.com");
});

test("checks to see if getName() returns employees name", () => {
	const employee = new Employee("mark", "0", "mark@here.com");

	expect(employee.getName()).toEqual(expect.stringContaining("mark"));
});

test("checks to see if getId() returns employee id", () => {
	const employee = new Employee("mark", "0", "mark@here.com");

	expect(employee.getId()).toEqual(expect.stringContaining("0"));
});

test("checks to see if getEmail() returns employees email", () => {
	const employee = new Employee("mark", "0", "mark@here.com");

	expect(employee.getEmail()).toEqual(expect.stringContaining("mark@here.com"));
});

test("checks to see if getRole returns employees role", () => {
	const employee = new Employee("mark", "0", "mark@here.com");

	expect(employee.getRole()).toEqual(expect.stringContaining("employee"));
});

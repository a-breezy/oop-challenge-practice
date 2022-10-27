const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name = "", id = "", email = "", school = "") {
		super(name, id, email);

		this.school = school;
		this.role = "intern";
	}

	getSchool() {
		return `${this.name}'s school is ${this.school}`;
	}

	getRole() {
		return `${this.name}'s role is ${this.role}`;
	}
}
console.log(new Intern());

module.exports = Intern;

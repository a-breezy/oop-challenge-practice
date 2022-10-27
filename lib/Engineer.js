const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name = "", id = "", email = "", github = "") {
		super(name, id, email);

		this.github = github;
		this.role = "engineer";
	}

	getGithub() {
		return `${this.name}'s github is ${this.github}`;
	}

	getRole() {
		return `${this.name}'s role is ${this.role}`;
	}
}
console.log(new Engineer())

module.exports = Engineer;

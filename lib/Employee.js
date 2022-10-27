class Employee {
	constructor(name = "", id = "", email = "") {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = "employee";
	}

	getName() {
		return `${this.name}`;
	}

	getId() {
		return `${this.name}'s id is ${this.id}`;
	}

	getEmail() {
		return `${this.name}'s email is ${this.email}`;
	}

	getRole() {
		return `${this.name}'s role is ${this.role}`;
	}
}
console.log(new Employee());

module.exports = Employee;

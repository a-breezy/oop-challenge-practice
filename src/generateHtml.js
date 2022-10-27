const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

const blankHtml = data => {
	return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            <title>Team Profile Generator</title>
        </head>
    
        <body>
            <header>
                <h1 class="shadow bg-primary ps-5 bg-opacity-50 blue-300">Team Profile Generator</h1>
            </header>
        
        <!-- hero -->
        <section class="hero">
        ${teamProfile(data)}
        </section>
    </body>
</html>`;
};

const teamProfile = data => {
	const managerSection = `
	<section class="hero">
	<!-- manager team -->
	<h2 class="ps-4">Meet the Manager</h2>
	<div class="row row-cols-1 row-cols-md-3 g-4">
	    ${data
				.filter(role => role.getRole() === "Manager")
				.map(manager => generateManager(manager))
				.join("")}
	<div>`;

	// filters if there are no employees other than manager
	if (!data.filter(role => role.getRole() != "Manager").length) {
		return managerSection;
	}

	const teamSection = `
        <!-- interns and engineers -->
	    <h2 class="ps-4">And the rest of the Team:</h2>

	    <div class="row row-cols-1 row-cols-md-3 g-4">

	    ${data
				.filter(employee => employee.getRole() === "Engineer")
				.map(role => generateEngineer(role))
				.join("")}

        ${data
					.filter(employee => employee.getRole() === "Intern")
					.map(role => generateIntern(role))
					.join("")}
	    </div>`;

	return managerSection + teamSection;
};

const generateManager = managerData => {
	return `<div class="col">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title bg-success bg-opacity-50">${managerData.getName()}</h4>
                        <h5>Manager</h5>
                        <p class="card-text">email: 
                        <a href="${managerData.getEmail()}">${managerData.getEmail()}}</a>
                        </p>
                        <p class="card-text">${managerData.getId()}</p>
                        <p class="card-text">Office Number: ${managerData.getOfficeNumber()}</p>
                    </div>
                </div>
            </div>
            `;
};

const generateEngineer = engineerData => {
	return `<div class="col">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title bg-success bg-opacity-50">${engineerData.getName()}</h4>
                <h5>Engineer</h5>
                <p class="card-text">email: 
                  <a href="${engineerData.getEmail()}">${engineerData.getEmail()}</a>
              </p>
              <p class="card-text">ID: ${engineerData.getId()}</p>
              <p class="card-text">GitHub: ${engineerData.getGithub()}</p>
              </div>
            </div>
          </div>`;
};

const generateIntern = internData => {
	return `<div class="col">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title bg-success bg-opacity-50">${internData.getName()}</h4>
                <h5>Engineer</h5>
                <p class="card-text">email: 
                  <a href="${internData.getEmail()}">${internData.getEmail()}</a>
              </p>
              <p class="card-text">ID: ${internData.getId()}</p>
              <p class="card-text">GitHub: ${internData.getSchool()}</p>
              </div>
            </div>
          </div>`;
};

module.exports = blankHtml;

const Manager = require('../lib/Manager');
const Engineeer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

function generateCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
      const teamArray = team[i];
      switch(teamArray.getRole()) {
        case 'Manager':
          const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
          cards.push(generateManagerCard(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
          cards.push(generateEngineerCard(engineer));
          break;
        case 'Intern':
          const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
          cards.push(generateInternCard(intern));
          break;
      }
    }
    return cards.join(``)
}

let generateManagerCard = (Manager) => {
    return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header'>
        <h3 class="card-title">${Manager.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
      </div>

      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Manager.getId()}</li>
          <li class="list-group-item">Email: ${Manager.getEmail()}</li>
          <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `
}

let generateEngineerCard = (Engineer) => {
    return `
    <div class="card m-1 shadow" style="width: 18rem">
      <div class='card-header'>
        <h3 class="card-title">${Engineer.getName()}</h3>
        <h6 class="card-text"><i class="fa fa-coffee"></i> ${Engineer.getRole()}</h6>
      </div>
      
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${Engineer.getId()}</li>
          <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
          <li class="list-group-item">Office Number: ${Engineer.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `
}

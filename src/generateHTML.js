const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

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
    <div class="card employee-card">
      <div class='card-header bg-success text-white'>
        <h2 class="card-title"> ${Manager.getName()}</h2>
        <h3 class="card-title"> ${Manager.getRole()}</h4>
      </div>

        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${Manager.getId()} </li>
            <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}"> ${Manager.getEmail()} </a></li>
            <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()} </li>
          </ul>
        </div>
    </div>
  `;
};

let generateEngineerCard = (Engineer) => {
    return `
    <div class="card employee-card">
      <div class='card-header bg-warning text-white'>
        <h2 class="card-title"> ${Engineer.getName()}</h2>
        <h3 class="card-title"> ${Engineer.getRole()}</h3>
      </div>

      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${Engineer.getId()}</li>
          <li class="list-group-item">Email: <a href= "mailto:${Engineer.getEmail()}"> ${Engineer.getEmail()} </a></li>
          <li class="list-group-item">GitHub: <a href= "https://github.com/${Engineer.getGithub()}" target="_blank" rel="noopener noreferrer"> ${Engineer.getGithub()} </a></li>
        </ul>
      </div>
    </div>
  `;
};

let generateInternCard = (Intern) => {
    return `
    <div class="card employee-card">
      <div class='card-header bg-info text-white'>
        <h2 class="card-title">${Intern.getName()}</h2>
        <h3 class="card-title">${Intern.getRole()}</h3>
      </div>

      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${Intern.getId()}</li>
          <li class="list-group-item">Email: <a href= "mailto:${Intern.getEmail()}">${Intern.getEmail()} </a></li>
          <li class="list-group-item">School: ${Intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  `;
};

function generateHTML (team) {
    console.log(team)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <title> Team Profile Page </title>
    </head>

    <body>
        <div class=""container fluid">
            <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading bg-secondary bg-gradient text-white">
                <h1 class="text-center"> Meet the Team </h1>
              </div>
             </div>

        <div class="container">
          <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
              ${generateCards(team)}
            </div>
          </div>
        </div>
    </body>
</html>
  `;
}


module.exports = generateHTML;

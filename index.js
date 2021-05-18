const fs = require("fs");
const inquirer = require('inquirer')
//const path = require('path');
//const util = require('util');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//const writeFileAsync = util.promisify(fs.writeFile);
const generateHTML = require('./src/generateHTML.js');

const Team = [];

const managerPrompt = [{
    type: 'input',
    name: 'name',
    message: "Enter your team manager's name",
  },

  {
    type: 'input',
    name: 'id',
    message: 'Enter your ID number',
  },

  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },

  {
    type: 'input',
    name: 'office',
    message: 'Enter your office number',
  },

  {
    type: 'list',
    name: 'moreTeam',
    message: 'Would you like to add more team members?',
    choices: ['No', 'Engineer', 'Intern'],

  },
];

const engineerPrompt = () => {

  inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "Enter your engineer's name",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter your engineer's ID",

      },

      {
        type: 'input',
        name: 'email',
        message: "Enter your engineer's email address",
      },

      {
        type: 'input',
        name: 'github',
        message: "Enter your engineer's Github username",
      },

      {
        type: 'list',
        name: 'moreTeam',
        message: 'Would you like to add more team members?',
        choices: ['No', 'Engineer', 'Intern'],

      },

    ])
    .then((data) => {
      var engineer = new Engineer(data.name, data.id, data.email, data.github)
      Team.push(
        engineer
      );
      if (data.moreTeam === "Engineer") {
        engineerPrompt();
      } else if (data.moreTeam === "Intern") {
        internPrompt();
      } else {
        let markdown = generateHTML(Team);
        fs.writeFileSync('./dist/index.html', markdown);
      }
    });
};

const internPrompt = () => {

  inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: "Enter your intern's name",
    },

    {
      type: 'input',
      name: 'id',
      message: "Enter your intern's ID",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter your intern's email address",
    },

    {
      type: 'input',
      name: 'school',
      message: "Enter your intern's school name",
    },

    {
      type: 'list',
      name: 'moreTeam',
      message: 'Would you like to add more team members?',
      choices: ['No', 'Engineer', 'Intern'],

    },
  ]).then((data) => {
    Team.push(
      new Intern(data.name, data.id, data.email, data.school)
    );
    if (data.moreTeam === "Engineer") {
      engineerPrompt();
    } else if (data.moreTeam === "Intern") {
      internPrompt();
    } else {
      let markdown = generateHTML(Team);
      fs.writeFileSync('./dist/index.html', markdown);

    }
  });

};

const init = () => {
  inquirer.prompt(managerPrompt).then((data) => {
    Team.push(
      new Manager(data.name, data.id, data.email, data.office)
    );
    if (data.moreTeam === "Engineer") {
      engineerPrompt();
    } else if (data.moreTeam === "Intern") {
      internPrompt();
    } else {
      let markdown = generateHTML(Team);
      fs.writeFileSync('./dist/index.html', markdown);
    }
  });
};

init();
const fs = require("fs");
const inquirer = require('inquirer')
const jest = require('jest')
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateHTML = require('./lib/generateHTML.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

const managerPrompt = [{
    type: 'input',
    name: 'name',
    message: 'Enter team manager name',
  },
  {
    type: 'rawlist',
    name: 'role',
    message: 'Enter your role',
    default: 'Manager',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter the employee ID',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the employee e-mail'
  },
  {
    type: 'input',
    name: 'office',
    message: 'Enter your office number'
  }

];

// TODO: Create a function to initialize app
async function init() {
  try {
    const responses = await inquirer.prompt(managerPrompt);
    const markdown = generateHTML(responses);
    await writeFileAsync('./dist/index.html', markdown);
    console.log('Successfully wrote to index.HTML');
  } 
    catch (error) {
    console.log(error);
  }
};


init();

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
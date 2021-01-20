const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { generate } = require("rxjs");

const engagementTeam = [];

const confirmName = async (name) => {
  if (name === '') {
    return 'Incorrect name';
  };
  return true;
};

const confirmNumber = async (name) => {
  if (name === '') {
    return 'Incorrect number';
  };
  return true;
};

function validateEmail(name) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
    return (true)
  }
  return ("You have entered an invalid email address!")
}

//Gathering information about Manager.
function addManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the manager?",
      validate: confirmName
    },
    {
      type: 'input',
      name: 'id',
      message: "What's the id of the manager?",
      validate: confirmNumber
    },
    {
      type: 'input',
      name: 'email',
      message: "What's the email of the manager?",
      validate: validateEmail
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What's the office number of the manager?",
      validate: confirmNumber
    }
  ])
    .then((answer) => {
      const Manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
      engagementTeam.push(Manager);
      pickNextMember()
    })
    .catch(err => console.log(err));
  console.log('Manager created! ' + newManager);

  start();
}


const pickNextMember = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'employeeType',
    message: "Which employee type do you want to add?",
    choices: [
      'Manager',
      'Engineer',
      'Intern',
      'Exit',
    ]
  }]);

  if (answer.employeeType == 'Engineer') {
    addEngineer();
    inquirer.prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
        validate: confirmName
      },
      {
        type: "input",
        message: "Enter employer ID number.",
        name: "id",
        validate: confirmNumber
      },
      {
        type: "input",
        message: "Enter your email.",
        name: "email",
        validate: validateEmail
      },
      {
        type: "input",
        message: "Enter your Github username.",
        name: "github",
        validate: confirmName
      },
    ])
      .then((answer) => {
        const Engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        engagementTeam.push(Engineer);
      })
      .catch(err => console.log(err));
    console.log('Engineer created! ' + newEngineer);

  }
 
}

const start = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'employeeType',
    message: "Which employee type do you want to add?",
    choices: [
      'Manager',
      'Engineer',
      'Intern',
      'Exit'
    ]
  }]);

  if (answer.employeeType == 'Intern') {
    addIntern();
    inquirer.prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
        validate: confirmName
      },
      {
        type: "input",
        message: "What is your intern's id?",
        name: "id",
        validate: confirmNumber
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
        validate: validateEmail
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
        validate: confirmName
      }
    ])
      .then((answer) => {
        const Intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        engagementTeam.push(Intern);
      })
      .catch(err => console.log(err));

    console.log('intern created! ' + newIntern);

    console.log('Goodbye!')

    // start writing to file! / or generating the html
    // user render()
  }
  else { generateFile() }

  /*       try {
          }
          .catch(err) {
          console.log(err);
        } */


        startWrite();

  //Call the function



  function startWrite() {
    fs.writeFileSync(outputPath, render(engagementTeam), "utf-8")
  }
}

start();
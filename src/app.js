const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

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
  inquirer.prompt([{
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
      const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
      engagementTeam.push(newManager);
      console.log('Manager created! ' + newManager);
      pickNextMember()
    })
    .catch(err => console.log(err));
}

//Gathering information about Engineer.
function addEngineer() {
  inquirer.prompt([{
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
      const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
      engagementTeam.push(newEngineer);
      console.log('Engineer created! ' + newEngineer);
      pickNextMember()
    })
    .catch(err => console.log(err));
}

//Gathering information about Intern.
function addIntern() {
  inquirer.prompt([{
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
      const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
      engagementTeam.push(newIntern);
      console.log('intern created! ' + newIntern);
      pickNextMember()
    })
    .catch(err => console.log(err));
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
  }]).then((answer) => {

    if (answer.employeeType === 'Engineer') {
      addEngineer();
    } else if (answer.employeeType === 'Manager') {
      addManager();
    } else if (answer.employeeType === 'Intern') {
      addIntern();
    } else {
      // start writing the team
      console.log('Start rendering the team!')
      startWrite()
      

    }
  })
}


//   //Call the function

  function startWrite() {
    if (fs.existsSync(outputPath)) {
      fs.writeFileSync(outputPath, render(engagementTeam), "utf-8")
    } else {
      fs.mkdir(OUTPUT_DIR, (err) => {
        if (err) throw err
        fs.writeFileSync(outputPath, render(engagementTeam), "utf-8")
      })
    }
  }

pickNextMember();
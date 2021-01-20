const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//////////////

/* 
function validateInput (input) {
    // Declare function as asynchronous, and save the done callback
    var done = this.async();
    const isValid = /[a-z]/.test(input.trim())
  
    // Do async stuff
    setTimeout(function() {
      if (!isValid) {
        // Pass the return value in the done callback
        done('No numbers!');
        return;
      }
      // Pass the return value in the done callback
      done(process.exit(0));
    }, 1000);
  } */

  ////////////

  const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the manager?",
            validate: async(input) => {
              if (input == "" ||/\s/.test(input)) {
                return "Oh no. Please enter a valid name.";
              }
              return true;
            }
          },
          {
            type: 'input',
            name: 'id',
            message: "What's the id of the manager?",
            validate: async(input) => {
              if(isNaN(input)) {
                return "Incorrect/missing ID. Please try again.";
              }
              return true;
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What's the email of the manager?",
            validate: async (input) => {
              if(input == /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(input)) {
                  return true;
              }
              return "Please enter a valid email.";
            }
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: "What's the office number of the manager?",
            validate: async(input) => {
              if(isNaN(input)) {
                return "Incorrect or non working number.";
              }
              return true;
          }
        }
        ])
        .then((answer) => {
            const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);

            console.log('Manager created! ' + newManager);

            start();

         
        })
        .catch(err => console.log(err))
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
      }]).then(answer => {
          if(answer.employeeType == 'Manager') {
            addManager();
          } else if(answer.employeeType == 'Engineer') {
            addEngineer();
            inquirer.prompt([
                {
                  type: "input",
                  message: "What is the engineer's name?",
                  name: "name",
                  validate: async(input) => {
                    if (input == "" ||/\s/.test(input)) {
                      return "Oh no. Please enter a valid name.";
                    }
                    return true;
                  }
                },
                {
                  type: "input",
                  message: "Enter employer ID number.",
                  name: "id",
                  validate: async(input) => {
                    if(isNaN(input)) {
                      return "Incorrect/missing ID. Please try again.";
                    }
                    return true;
                  }
                },
                {
                  type: "input",
                  message: "Enter your email.",
                  name: "email",
                  validate: async (input) => {
                    if (input == /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/.test(input)) {
                        return  true;
                    }
                    return "Please enter a valid email";
                }
                },
                {
                  type: "input",
                  message: "Enter your Github username.",
                  name: "github",
                  validate: async(input) => {
                    if(input == "" || /\s/.test(input)) {
                        return "Github username not found.";
                    }
                    return true;
                }
                },
              ])
              .then((answer) => {
                const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
          
                console.log('Engineer created! ' + newEngineer);
          
            })
            .catch(err => console.log(err));
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
            }

          }else if(answer.employeeType == 'Intern') {
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
                const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
          
                console.log('intern created! ' + newIntern);
          
            })
            .catch(err => console.log(err));
             console.log('Goodbye!')

             // start writing to file! / or generating the html
             // user render()
         }
      })
      


  }

  
start();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
© 2021 GitHub, Inc.
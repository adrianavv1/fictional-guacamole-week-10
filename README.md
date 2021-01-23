# Team Generator created with NodeCLI
## Application Description
This application is a Node command line app that takes in information of employees and generates an HTML webpage and displays information about each team member. This application utilizes jests unit tests to make sure everything is properly working. 

The live webpage can be viewed [here](http://127.0.0.1:5500/src/output/team.html)
link to [tutorial](https://youtu.be/QGNbV9NWbaU)


### User Story

```md
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```
## Installation

To begin generating your HTML team page, you must first downlod the repository and run on your terminal ```npm install```. You need tih in order to install the following npm package dependencies.
```jest``` for running the provided tests, and ```inquirer`` for collecting input from the user. There wll also be unit tests to help you build the necessary classes. 

you can run these tests with the following command: ```npm run test```

It is recommended that you follow this work flow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

## Directory Structure

It is recommended that you start with a directory structure that looks like this:

```md
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```
The directory will cotain ```main.html``` and multiple HTML templates for each type of user. 

* engineer.html
* intern .html
* manager.html
## Usage
### User Input

The Node CLI will prompt you to generate a webpage for your team members. The application will ask you a series of a questions to gather data about each team member. There is no limit to the amount of employees you would like to plug in. At the end you will be asked to review and validate the information you provided. Thsi is to ensure the the data you provided is correct.  


### Classes
 The project must have the these classes: Employee, Manager, Engineer,
Intern. The tests for these classes in the tests directory must all pass.

Once you've completed building your team, the application will generate an ```index.html``` file in your directory folder. The input you provided for each employee will include:

* Name
* Role
* ID
* Email
* getName()
* getId()
* getEmail()
* getRole() // Returns 'Employee'

The other three classes will extend ```Employee``` .

For the ```Manager``` will also include:

* officeNumber
* getRole() // Overriden to return 'Manager'.

For the ```Engineer``` will also include:

* github // Github username
* get Github()
* get Role() // overriden to return 'Engineer'.

Last the ```Intern``` will include:

* School 
* getSchool()
* getRole() // overrriden to return 'Intern'.

### Roster Output

The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

* Name 
* Role
* ID
* Role-specific property (School, link to Github profile, or office number.)

## Questions

link to my [Github](https://github.com/adrianavv1)
You can always reach me at adrianavaldiglesias2@gmail.com and ill be ahppy to answer your questions. 

## License 

[MIT License](https://www.mit.edu/~amini/LICENSE.md)

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.










 
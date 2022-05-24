// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // requires the inquirer package
const fs = require('fs'); // import file system
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: "What is your project's name"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies to your package.json?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information does the user need in order to use your application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What do users need to know about contributing to the repository?',
        default: 'Create user specific branch/do not push to main'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What should the user input in the command-line in order to run tests?',
        default: 'npm run test'
    },
    {
        type: 'checkbox', 
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        default: 'cknight98'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'cknight98@gmail.com'
    }
]);
};


// TODO: Create a function to initialize app
function init() {
    questions().then((answers) => fs.writeFileSync('README.md', markdown(answers)))
    .then(() => console.log('Successfully generated README'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();

const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// array of questions for user
const questions = [
 {
    type: 'input',
    name: 'title',
    message: "What's your project title?",
 },
 {
   type: 'input',
   name: 'description',
   message: "Write a description of your project"
 },
 {
    type: 'input',
    name: 'installation',
    message: "Describe the steps for installing the project",
 },
 {
    type: 'input',
    name: 'username',
    message: "What's your github username?",
 },
 {
     type:'input',
     name:'email',
     message:'Whats your email?'
 },
 {
    type: 'list',
    name: 'license',
    message: "Choose a license",
    choices: ['MIT', 'GNU', 'LLC']
 },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => {
       console.log('done writing file');
    })
}

// function to initialize program
function init() {
    const promise = inquirer.prompt(questions);
    promise.then((answers) =>{
        //{title: "my projecy" , description:'ssdsd' }
       let markdownText = generateMarkdown(answers);
       console.log(markdownText);
       //Write the file 
       writeToFile('output.md', markdownText);
    })
    .catch((err) =>{
      throw err;
    })

}

// function call to initialize program
init();

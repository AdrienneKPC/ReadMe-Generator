const inquirer = require('inquirer')
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
 }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) =>{
       let markdownText = generateMarkdown(answers);
       console.log(markdownText);
       //Write the file 
       //writeToFile('output.md' , data (its a string of markdown))
       //writeToFile('output.md', markdownText);
    })
    .catch((err) =>{
      throw err;
    })

}

// function call to initialize program
init();

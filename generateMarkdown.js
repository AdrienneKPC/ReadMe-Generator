// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License badge](https://img.shields.io/badge/LICENSE-${data.license}-green)
  # ${data.title}


## Description
${data.description}

## Table of Contents 
- [Description](#description)
- 

## Installation
${data.installation}

## License 
${data.license}

## Questions
[link text](https://github.com/${data.username})
  `;
}


module.exports = generateMarkdown;

const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({}) =>

;

 



inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: '',
    },
  
  ])
  
  .then((answers) => {
    console.log(answers)
    console.log(answers.license)

    const readMeFileContent = generateReadMe(answers);

    fs.writeFile('index.html', readMeFileContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
    
  });
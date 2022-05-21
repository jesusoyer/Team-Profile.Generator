const inquirer = require('inquirer')


// describe('test user input' () => {

//   // stub inquirer
//   let backup;
//   before(() => {
//     backup = inquirer.prompt;
//     inquirer.prompt = (questions) => Promise.resolve({email: 'test'})
//   })

//   it('should equal test', () => {
//     module(...).then(answers => answers.email.should.equal('test'))
//   })

//   // restore
//   after(() => {
//     inquirer.prompt = backup
//   })

// })
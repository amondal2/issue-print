#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const fs = require('fs');

program.command('configure')
  .action(async () => {
    const questions = [{
      type: 'Access token',
      name: 'accesstoken',
      message: 'Enter github access token',
    }];
    const answers = await prompt(questions);

    await fs.writeFile('./config.txt', `${answers.accesstoken}\n`, (err) => {
      if (err) { console.log(`Error writing access token. Failed with ${err}`); }
      console.log('Access token saved. Run issue-print print to see assigned issues');
    });
  });


program.arguments('print')
  .action(() => console.log('ok'));

program.parse(process.argv);

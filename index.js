#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const fs = require('fs');
const request = require('superagent');
const path = require('path');

program.command('configure')
  .action(async () => {
    const questions = [{
      type: 'Access token',
      name: 'accesstoken',
      message: 'Enter github access token',
    }];
    const answers = await prompt(questions);
    const pathName = path.resolve(__dirname, 'config.txt');
    await fs.writeFile(pathName, `${answers.accesstoken}\n`, (err) => {
      if (err) {
        console.log(`Error writing access token. Failed with ${err}`);
        throw err;
      }
      console.log('Access token saved. Run issue-print print to see assigned issues');
    });
  });


program.arguments('print')
  .action(async () => {
    let accessToken = '';
    const endpoint = 'https://api.github.com/user/issues';
    try {
      const pathName = path.resolve(__dirname, 'config.txt');
      accessToken = fs.readFileSync(pathName, 'utf8').trim();
    } catch (err) {
      console.log(`Reading access token failed with error: ${err}`);
      console.log('Ensure you\'ve run issue-print configure before running this step.');
      throw err;
    }
    const data = await request.get(endpoint).set('Authorization', `Bearer ${accessToken}`);
    const issues = data.body;
    issues.forEach((issue) => {
      console.log(`Issue Title: ${issue.title}`);
      console.log('\n');
      console.log(`Repository: ${issue.repository.name}`);
      console.log('\n');
      console.log(`Issue text: ${issue.body}`);
      console.log('\n');
      console.log('\x1b[36m%s\x1b[0m', '--------');
    });
  });

program.parse(process.argv);

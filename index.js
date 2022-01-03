import { Command } from "commander";
import figlet from "figlet";
import inquirer from "inquirer";
import fs from 'fs';
import fse from 'fs-extra';
import path from "path";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const program = new Command();

const questions = [
  {
    type: 'list', message: 'Choose your framework:', name: "framework", choices: 
    [
      'Next',
      'Node',
      'React'
    ]
  },
  {
    type: 'input', message: "Write your project name:", name: 'pname'
  },
]

program
  .version('1.0.0')
  .description(chalk.cyanBright(figlet.textSync('MY FRAMEWORK')));
program
  .command('new')
  .alias('n')
  .action(() => {
    inquirer
      .prompt(questions)
      .then((answers) => {
        let projectFramework = answers.framework;
        let projectName = answers.pname;
        let myPath = `C:/Users/Narvaja/Desktop/${projectName}`
        console.log(answers)
        fs.mkdirSync(path.resolve(myPath), {recursive: true})
        if (projectFramework === 'Node') {
          fse.copySync("./node", myPath);
        } else if (projectFramework === 'Next') {
          fse.copySync("./next", myPath);
        } else {
          fse.copySync("./reactfolder", myPath);
        }
        let goNcode = chalkAnimation.rainbow('Now, get back to code!')
      })
  })


  


program.parse(process.argv);



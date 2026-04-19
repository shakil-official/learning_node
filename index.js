// Importing module
// const chalk = require("chalk");

// const add = require("./math"); // for common js module system for single export

// const { add, subtract } = require("./math"); // for common js module system for multiple export 


import chalk from "chalk";
import { add, subtract } from "./math.js";

const  log = console.log;


log(chalk.white.bold(add(5, 10)));
log(chalk.green.bold(subtract(10, 5)));





// Printing the text
// console.log(chalk.red("aayush"))
// console.log(chalk.red.underline("aayush"))
// console.log(chalk.red.underline.bold("GFG"))


// console.log(__dirname) // current directory path
// console.log(__filename) // current file path

 
// console.log(process.cwd()) // current working directory
// console.log(process.pid) // current process id
// console.log(process.version) // current node version
// console.log(process.platform) // current platform

// log(chalk.green("This is a green text"))
// log(chalk.blue("This is a blue text"))
// log(chalk.yellow("This is a yellow text"))
// log(chalk.red("This is a red text"))
// log(chalk.cyan("This is a cyan text"))
// log(chalk.magenta("This is a magenta text"))
// log(chalk.white("This is a white text"))
// log(chalk.gray("This is a gray text"))
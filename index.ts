#! /usr/bin/env node 

// importthe inquirer & chalk
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.redBright.bold("\t\n    Welocome to the Word Counter Application    \t\n"));

async function main() {
    let useAgain = true;
    while(useAgain)
         // ask the user to enter the sentence
          // count the words in the sentence
          // print the result
          {
        const answer :{sentence:string} = await inquirer.prompt([{
            name: "sentence",
            type: "input",
            message: (chalk.yellow("Enter your sentence to count the word:"))// ask the user to enter the sentence
        }])
        // count the words in the sentence
        if(answer.sentence){
        const words = answer.sentence.trim().split(' ');// split the sentence into words

        console.log(words);
        console.log(chalk.green.italic(`\nYour sentence word counter is: " ${words.length} ".\n`));
        // Remove spaces from the sentence
        const joinedSentence = answer.sentence.replace(/\s/g, " "); // Replace all spaces with a single space
        console.log(chalk.green.italic(`\nYour sentence character counter is: " ${joinedSentence.length} ".\n`));
        } else {
            console.log(chalk.yellowBright("Invalid Input! "))
        }
        // ask the user if he want to count words again
        const again = await inquirer.prompt({
            name: "repeat",
            type: "confirm",
            message: (chalk.blue("Do you want to count words again? "))
        })
        // if the user want to count words again, repeat the process
        useAgain = again.repeat;
    }
    console.log(chalk.redBright.bold("\t\n   ** GoodBy **    \t\n"));
} 
main();
// if the user don't want to count words again, print goodbye message
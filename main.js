#!/usr/bin/env node
import inquirer from 'inquirer';
const player = await inquirer.prompt([
    {
        message: 'Make Your Move',
        type: 'list',
        name: 'Symbol',
        choices: ['Rock', 'Paper', 'Scissors'],
    },
]);
let computer = Math.floor(Math.random() * 3 + 1);
if (computer === 1) {
    computer = 'Rock';
}
else if (computer === 2) {
    computer = 'Scissors';
}
else if (computer === 3) {
    computer = 'Paper';
}
if (player.Symbol === computer) {
    console.log("It's a tie");
}
else if ((player.Symbol === 'Rock' && computer === 'Scissors') ||
    (player.Symbol === 'Scissors' && computer === 'Paper') ||
    (player.Symbol === 'Paper' && computer === 'Rock')) {
    console.log('YOU WIN');
}
else {
    console.log('Computer wins!');
}
console.log(`YOU: ${player.Symbol} \nCOMPUTER: ${computer}`);

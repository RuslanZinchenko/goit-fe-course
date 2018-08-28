"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = Number(prompt('Введите число', ''));
    numbers.push(userInput);
} while (Number(userInput) && userInput !== null);
  console.log (numbers);

for (let sum of numbers) {
    total += sum;
 };
 
 console.log (total);
 alert (`Общая сумма чисел равна ${total}`);

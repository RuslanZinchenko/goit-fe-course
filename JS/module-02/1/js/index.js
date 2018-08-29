'use strict';

let userInput;
let numbers = [];
let total = 0;

do {
  userInput = Number(prompt ('Введите число', ''));
  numbers.push(userInput);
} while (Number(userInput) && userInput !== null);

console.log(numbers);

for (let i of numbers) {
   total += i;
};

console.log(total);
alert(`Общая сумма чисел равна ${total}`);
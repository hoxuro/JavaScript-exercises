"use strict";

let number = enterInt("Introduce un numero entero: ");

//loop that calculates the summatory from 1 to user number
let sum = 0;
for (let i = 0; i < number; i++) {
  sum += i;
}

console.log(`The summatory of numbers from 1 to ${number} is ${sum}`);

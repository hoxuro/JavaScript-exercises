"use strict";

let n = enterInt("Introduce un numero entero: ");

//loop that calculates the first n multiples of 3
let multiplesSum = 0;
let counter = 0,
  i = 1;

console.log(`First ${n} multiples of 3:`);
do {
  if (i % 3 == 0) {
    console.log(i);
    multiplesSum += i;
    counter++;
  }
  i++;
} while (counter != n);

console.log(`Summatory of the first ${n} multiples of 3: ${multiplesSum}`);

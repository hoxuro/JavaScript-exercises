"use strict";

let number = enterInt("Enter an int number");

let even = 0,
  odd = 0;

for (let i = 1; i <= number; i++) {
  if (i % 2 == 0) {
    even += i;
  } else {
    odd += i;
  }
}

console.log(`++Even and Odd numbers summation (from 1 to ${number}) ++\n
Even sum: ${even}
Odd sum: ${odd}`);

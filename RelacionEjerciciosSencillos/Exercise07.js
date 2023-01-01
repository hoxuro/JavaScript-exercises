"use strict";

let greater = 0,
  smaller = 0,
  container = 0;

for (let i = 0; i < 5; i++) {
  container = enterInt("Enter an int number: ");

  if (i == 0) {
    greater = container;
    smaller = container;
  } else if (container > greater) {
    greater = container;
  } else if (container < smaller) {
    smaller = container;
  }
}

console.log(`Greater number inserted: ${greater}
Smaller number inserterd: ${smaller}`);

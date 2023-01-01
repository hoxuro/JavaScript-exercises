"use strict";

function validateBase(base) {
  if (isFloat(base)) {
    do {
      base = Number(prompt("Enter a valid base!"));
    } while (isFloat(base));
  }

  return base;
}

function validateExponent(exponent) {
  if (!Number.isInteger(base)) {
    do {
      exponent = Number(prompt("Enter a valid exponent!"));
    } while (!Number.isInteger(base));
  }

  return exponent;
}

function calcResult(base, exponent) {
  let result = base;
  for (let i = 0; i < exponent - 1; i++) {
    result *= base;
  }

  return result;
}

//MAIN PROGRAM
console.log("Programa que calcula el resultado de elevar un numero a n");
let base = Number(prompt("Introduce la base:"));
validateBase(base);
let exponent = Number(prompt("Introduce el exponente:"));
validateExponent(exponent);
let result = calcResult(base, exponent);
console.log(`${base} elevado a ${exponent} es ${result}`);

"use strict";

function enterInt(message) {
  let numero = Number(prompt(message));

  if (!Number.isInteger(numero)) {
    do {
      numero = Number(prompt("Introduce los datos correctamente!"));
      console.log(message);
    } while (!Number.isInteger(numero));
  }

  return numero;
}

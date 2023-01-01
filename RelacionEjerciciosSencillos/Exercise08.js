"use strict";

//function that validates the year inserted
function validateYear(year) {
  do {
    if (year < 0) {
      year = enterInt("Please, enter a valid year:");
    }
  } while (year < 0);

  return year;
}

//function that changes the final message depending is our year is leap or not
function leapYearMessage(isLeapYear, year) {
  let finalMessage = "";

  finalMessage += !isLeapYear
    ? `${year} is not a leap year`
    : `${year} is a leap year`;

  return finalMessage;
}

//function that checks if a year is leap or not
function checkLeapYear(year) {
  let isLeap = false;

  if (year % 4 == 0) {
    if (year >= 100) {
      let yearString = String.toString(year);
      let lastTwoNum = yearString.substring(Math.max(yearString.length - 2, 0));

      if (!lastTwoNum == "99") {
        isLeap = true;
      }
    }

    isLeap = true;
  } else if (year % 100 == 0) {
    if (year % 400 == 0) {
      isLeap = true;
    }
  }

  return isLeap;
}

//Main program
console.log("Program that check if a year es leap or not");
let year = enterInt("Enter a year:");
validateYear(year);
let isLeapYear = checkLeapYear(year);
console.log(leapYearMessage(isLeapYear, year));

"use strict";

function smallestOfThreeNumbers(a, b, c) {
  if (a < b && a < c) {
    alert(a + " is smallest");
  } else if (b < a && b < c) {
    alert(b + "is the smallest");
  } else if (c < a && c < b) {
    alert(c + "is the smallest");
  }
}
smallestOfThreeNumbers(100, 500, 25);

// positive negative or zero

function positiveNegativeZero(number) {
  if (number < 0) {
    alert("negative");
  } else if (number > 0) {
    alert("positive");
  } else if (number === 0) {
    alert("zero");
  } else {
    alert(invalid);
  }
}
let userInput = +prompt("pick a number");
positiveNegativeZero(userInput);

//voting eligibility

function votingEligibility(age) {
  if (age >= 18) {
    alert("you may vote");
  } else {
    alert("ineligible to vote");
  }
}
let age = "what is your age";
votingEligibility(userInput);

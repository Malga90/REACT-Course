"use strict";

var square = function square(x) {
  return x * x;
};

// const squareArrow = x => {
//   return x * x;
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(square(4));
console.log(squareArrow(10));

// Challenge

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};

console.log(getFirstName("Malga 90"));

var getFirstName2 = function getFirstName2(fullName) {
  return fullName.split(" ")[0];
};

console.log(getFirstName2("Kowal Kowalski"));

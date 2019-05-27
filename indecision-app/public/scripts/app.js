"use strict";

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  //   console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 2016));

// this keyword - no longer bound

var user = {
  name: "Malga",
  cities: ["Gdańsk", "Poznań", "London"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });

    // this.cities.forEach(city => {
    //   console.log(this.name + " " + " has lived in " + city);
    // });
  }
};

console.log(user.printPlacesLived());

// Challenge

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 6,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());

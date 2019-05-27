const square = function(x) {
  return x * x;
};

// const squareArrow = x => {
//   return x * x;
// };

const squareArrow = x => x * x;

console.log(square(4));
console.log(squareArrow(10));

// Challenge

const getFirstName = fullName => {
  return fullName.split(" ")[0];
};

console.log(getFirstName("Malga 90"));

const getFirstName2 = fullName => fullName.split(" ")[0];

console.log(getFirstName2("Kowal Kowalski"));

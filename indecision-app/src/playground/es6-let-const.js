var nameVar = "Malga";
var nameVar = "Kowal";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("let", nameLet);

const nameConst = "Frank";
// nameConst = "Gunter";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Jen Mead";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);

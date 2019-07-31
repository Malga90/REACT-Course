// Object desctucturing

const person = {
  name: "Małga",
  age: 28,
  location: {
    //city: "London",
    temp: 22
  }
};

const { name: firstName = "JAne Doe", age } = person;
// const name = person.name;
// const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  name: "Harry Potter",
  author: "J. K. Rowling",
  publisher: {
    name: "Media"
  }
};

const { name: publisherName = "Self-published" } = book.publisher;

if (publisherName) {
  console.log(publisherName);
}

// Array descucturing

const address = ["1299 Jupiter Street", "Philapelphia", "Pennsylvnia", "19478"];
const [, city, state = "NY"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee", "$2.20", "$2.50", "$2.75"];

const [selledItem = "Cheese", , medium] = item;
console.log(`A medium ${selledItem} costs ${medium}`);

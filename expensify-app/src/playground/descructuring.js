console.log("nanannanan");

//// OBJECT DESCRTUCTURING
const person = {
  name: "Malga",
  age: 30,
  location: {
    // city: "London",
    temp: 81
  }
};

const { name: firstName = "Jane", age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}`);
// }

const book = {
  title: "Ego is the enemy",
  author: "Tyler Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self- Published" } = book.publisher;

console.log(publisherName);

/// ARRAY DESCRUCTURING

const address = ["1299 South Juniper Street", "NYC", "New York", "19147"];
const [, city, state = "Pensylvania"] = address;
console.log(`You are in ${city}, ${state}`);

const item = ["Coffee", "$1.8", "$2.1", "$2.5"];
const [menuItem, , medium] = item;
console.log(`A medium ${menuItem} costs ${medium}.`);

console.log("nanannanan");

const person = {
  name: "Malga",
  age: 30,
  location: {
    city: "London",
    temp: 81
  }
};

const { name: firstName = "Jane", age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It is ${temperature} in ${city}`);
}

const book = {
  title: "Ego is the enemy",
  author: "Tyler Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self- Published" } = book.publisher;

console.log(publisherName);

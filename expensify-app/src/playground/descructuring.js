const person = {
  name: "Małga",
  age: 28,
  location: {
    city: "London",
    temp: 22
  }
};

const { name: firstName = "JAne Doe", age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

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

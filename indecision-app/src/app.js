// JSX JavaScript XML

var app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer"
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

var user = {
  name: "Malga",
  age: 28,
  location: "Gdańsk"
};
var userName = "Malga90";
var userAge = 28;
var userLocation = "Gdańsk";
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

"use strict";

// JSX JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision app"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    ),
    React.createElement(
      "li",
      null,
      "Item three"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Malga Delegiewicz"
  ),
  React.createElement(
    "p",
    null,
    "Age: 28"
  ),
  React.createElement(
    "p",
    null,
    "Location: Gda\u0144sk"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

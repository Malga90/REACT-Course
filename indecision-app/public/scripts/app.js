"use strict";

var visibility = false;

var visibilityToggle = function visibilityToggle() {
  visibility = !visibility;
  renderApp();
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: visibilityToggle },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "There are some details!"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();

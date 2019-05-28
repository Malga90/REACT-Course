let visibility = false;

const visibilityToggle = () => {
  visibility = !visibility;
  renderApp();
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={visibilityToggle}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>There are some details!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();

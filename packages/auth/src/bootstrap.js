import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  // Ties the Container callback to the Auth app history
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        // Synchs Auth Router with Container BrowserRouter
        history.push(nextPathname);
      }
    },
  };
};

// If the application is running on dev and on isolation mode, mounts it on local index.html file
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_auth-dev-root");

  // Assuming the container doesn't have an element with id '_auth-dev-root'
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

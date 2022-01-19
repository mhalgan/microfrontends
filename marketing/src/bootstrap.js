import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
};

// If the application is running on dev and on isolation mode, mounts it on local index.html file
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  // Assuming the container doesn't have an element with id '_marketing-dev-root'
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

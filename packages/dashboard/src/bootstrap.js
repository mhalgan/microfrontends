import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If the application is running on dev and on isolation mode, mounts it on local index.html file
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_dashboard-dev-root");

  // Assuming the container doesn't have an element with id '_dashboard-dev-root'
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

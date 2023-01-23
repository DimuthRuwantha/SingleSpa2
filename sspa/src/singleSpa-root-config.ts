import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const data = {
  loaders: {},
  props: {
    myProp: "I'm from Root",
    navs: [{ url: "/", title: "Home" }, { url: "/app2", title: "App 2" },
    { url: "/app3", title: "App 3 (Angular 14)" }, { url: "/app4", title: "App 4 (React)" }]
  }
};

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

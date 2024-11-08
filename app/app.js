import { HomePage } from "./components/HomePage/HomePage";
customElements.define("home-page", HomePage);

const root = document.querySelector("#root");
root.appendChild(document.createElement("home-page"));
/* @refresh reload */
import { render } from "solid-js/web";
import Routers from "./Router/Routers"; // ✅ Correct import
import "./index.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error("Root element not found. Did you forget to add it to your index.html?");
}

render(() => <Routers />, root); // ✅ No extra <Router> here


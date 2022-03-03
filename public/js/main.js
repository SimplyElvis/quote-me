import { clearResult, showResult } from "./queryApi.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

function initApp() {
  const quoteDie = document.getElementById("quoteDice");
  quoteDie.addEventListener("click", performQuery);
  // perform query
  showResult();
}

const performQuery = (event) => {
  clearResult("loading...");
  showResult();
};

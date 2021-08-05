import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#activator").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
  console.log("You are welcome for the excuse!");
};

let excuseGenerator = () => {
  let who = ["My dog", "My grandma", "A wild turtle", "A black bird"];
  let action = ["ate", "peed on", "crushed", "broke", "pooped in"];
  let what = ["my homework", "my car keys", "my car"];
  let when = [
    "before the class",
    "right on time",
    "this morning",
    "during my lunch",
    "while I was praying",
    "while I was doing yoga"
  ];

  let elements = [who, action, what, when];
  let excuse = "";

  for (var index in elements) {
    excuse =
      excuse +
      elements[index][Math.floor(Math.random() * elements[index].length)] +
      " ";
  }
  return excuse;
};

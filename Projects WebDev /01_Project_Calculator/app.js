// Variables

const specialChars = ["+", "-", "*", "/", "="];
let output = "35%2";

// Selectors

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Event Listeners

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calculate(event.target.dataset.value);
  });
});

// Functions

function calculate(btnValue) {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "C") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) {
      return;
    }
    output += btnValue;
  }
  display.value = output;
}

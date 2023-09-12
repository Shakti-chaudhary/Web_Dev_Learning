// Selectors

const buttons = document.querySelectorAll(".grid-items");
// console.log(buttons);

// Event Listeners

console.log(typeof buttons[0].innerHTML);
buttons[0].addEventListener("click", clearOperator);

// Functions

function clearOperator(event) {
  console.log(event);
}

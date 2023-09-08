// Selectors

let items = document.querySelectorAll(".grid-items");

// Event Listeners

items.forEach((item) => {
  item.addEventListener("click", changeColor);
});

// Functions

function changeColor(event) {
  let clickItem = event.target;
  clickItem.classList.add("clicked");
  setTimeout(() => {
    clickItem.classList.remove("clicked");
  }, 100);
}

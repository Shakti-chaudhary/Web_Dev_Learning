// Selectors

const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Event Listeners

toggle.addEventListener("click", showNav);
open.addEventListener("click", showModal);
close.addEventListener("click", hideModal);
window.addEventListener("click", hideModalOutside);

// Functions

// Show Navbar
function showNav() {
  document.body.classList.toggle("show-nav");
}

// Show modal
function showModal() {
  modal.classList.add("show-modal");
}

// Close modal
function hideModal() {
  modal.classList.remove("show-modal");
}

// Hide modal on outside click
function hideModalOutside(event) {
  event.target == modal ? modal.classList.remove("show-modal") : false;
}

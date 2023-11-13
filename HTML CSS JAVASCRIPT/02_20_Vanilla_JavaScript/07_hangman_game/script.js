// Variables

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = ["w", "i", "z", "a", "r", "d"];
const wrongLetters = [];

// Selectors

const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll("figure-part");

// Event Listeners

// Functions

// Show hidden word
function display() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : ""
        }</span>`
    )
    .join("")}`;

  const innerWord = wordEl.innerText.replace(/\n/g, "");
  console.log(wordEl.innerText);

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won! 😄";
    popup.style.display = "flex";
  }
}
display();

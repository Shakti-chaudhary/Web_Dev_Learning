// Variables

// Selectors

const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const single_mealEl = document.getElementById("single-meal");

// Event Listeneres

submit.addEventListener("submit", searchMeal);

// Functions

function searchMeal(e) {
  e.preventDefault();

  // Clear search term
  single_mealEl.innerHTML = "";

  // Get search term
  const term = search.value;

  // Check for empty term
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } else {
    alert("please enter  a search term ");
  }
}

// Variables

const userGenerateApi = "https://randomuser.me/api";
let data = [];

// Selectors

const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");

const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// Event Listeners

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);

// Functions

// Fetch random user and add money
async function getRandomUser() {
  const response = await fetch(userGenerateApi);
  const apiData = await response.json();
  const user = apiData.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Add new userObj to data array
function addData(user) {
  data.push(user);

  updateDOM();
}

// Update DOM
function updateDOM(provideData = data) {
  // Clear main div
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

  provideData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name} </strong> ${formateMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Formate number  as money
function formateMoney(money) {
  return money.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

// Double everyones money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: +user.money * 2 };
  });
  updateDOM(data);
}

// Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// Filter only millionaires
function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement("h3");
  wealthEl.innerHTML = ` Total Wealth: <strong>${formateMoney(
    wealth
  )} </strong> `;
  main.appendChild(wealthEl);
}

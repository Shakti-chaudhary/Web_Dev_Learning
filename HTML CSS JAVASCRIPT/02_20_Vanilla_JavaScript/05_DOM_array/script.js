// Variables

const userGenerateApi = "https://randomuser.me/api";
let data = [];

// Selectors

const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-milloinaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// Event Listeners

addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);

// Functions

// Fetch random user and add money
async function getRandomUser() {
  const response = await fetch(userGenerateApi);
  const data = await response.json();
  const user = data.results[0];

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
  return +money.toLocaleString("en-US", {
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

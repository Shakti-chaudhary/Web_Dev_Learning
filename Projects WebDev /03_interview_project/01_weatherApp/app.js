// Variables
const apiKey = "2ee9a323e1b35335a8091c873209eb2f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//   q=meerut&appid=

// Selectors

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weather = document.querySelector(".weather");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

// StartUp function

// checkWeather("New York");

// Event Listeners

searchBtn.addEventListener("click", () => {
  let value = searchBox.value.trim();

  if (value.length > 0) {
    checkWeather(searchBox.value);
  }
  searchBox.value = "";
});

// Functions

async function checkWeather(searchCity) {
  const response = await fetch(apiUrl + searchCity + `&appid=${apiKey}`);
  var data = await response.json();
  city.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = Math.round(data.wind.speed) + " km/h";
  weather.style.display = "block";
}

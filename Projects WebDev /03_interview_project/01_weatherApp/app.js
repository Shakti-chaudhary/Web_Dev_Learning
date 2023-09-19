// Variables
const apiKey = "2ee9a323e1b35335a8091c873209eb2f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// Selectors

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weather = document.querySelector(".weather");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");

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

  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = Math.round(data.wind.speed) + " km/h";
    error.style.display = "none";
    weather.style.display = "block";

    // Weather icon
    let iconCode = data.weather[0].icon;

    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    weatherIcon.src = iconUrl;
  }
}

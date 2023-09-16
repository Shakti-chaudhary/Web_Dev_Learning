// Variables
const apiKey = "2ee9a323e1b35335a8091c873209eb2f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=meerut";

//   q=meerut&appid=

// Selectors

// Event Listeners

// Functions

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  console.log(response);

  var data = await response.json();
  console.log(data);
}
checkWeather();

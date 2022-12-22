function showCity(response) {
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
}

function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

function showCondition(response) {
  let conditionElement = document.querySelector("#condition");
  conditionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showCity);
axios.get(apiUrl).then(showTemperature);
axios.get(apiUrl).then(showCondition);

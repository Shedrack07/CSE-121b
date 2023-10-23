// Global Variables
const api = '47b24e907f9953e973b366b0a776d20e';
const ninjaAPI ="qvnd9tzzhWTiWZIozPgvbw==ZKLVKjD6dbG3kM7P"
const temperature = document.querySelector(".temperature");
const sunriseTime = document.querySelector(".sunrise");
const sunsetTime = document.querySelector(".sunset");
const cityName = document.querySelector("#city-name");
const weatherDescription = document.querySelector(".weather-description");
const weatherIcon = document.getElementById("weather-icon");
const feelsLike = document.querySelector(".feels-like");
const tempHigh = document.querySelector(".high");
const tempLow = document.querySelector(".low");
const windSpeed = document.querySelector(".wind-speed");
const stateName = document.querySelector("#state-name");
let data;


// Gets users location upon loading of page
window.addEventListener('load', getLocation);
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(formatAPICall);
}}

// Formats URL for API call based off of user location and passes to fetchData function
function formatAPICall(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude; 
  let base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=imperial`;
  fetchData(base);
}

// Formats URL for API call based off of user specified zipcode and passes to fetchData function
function formatZipAPICall(zipCode){
  let base = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},&appid=${api}&units=imperial`;
  fetchData(base);
}

// Formats URL for API call based off cooridnates of of most relevant city specified by user
async function formatCityAPICall(lat, long){
  let base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=imperial`;
  fetchData(base)
}

// Filters cities with a shared name. Finds most relevant city and passes the cities coordinates to formatCityAPICall
async function fetchBiggestCity(city){
  const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}&country=us`,  { headers: { 'X-API-Key': ninjaAPI,} }); const data2 = await response.json()
  biggestCity = data2[0]
  lat = biggestCity["latitude"]
  long = biggestCity["longitude"]
  formatCityAPICall(lat,long)
}

// Finds state name based off of coordinates. Displays name under cities name on webpage.
async function getStateName(data){
  mainLat = data.coord.lat;
  mainLon = data.coord.lon;
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${mainLat}&lon=${mainLon}&limit=2&appid=${api}`); const data1 = await response.json()
  biggestCity = data1[0]
  state = biggestCity["state"]
  stateName.textContent = state;
}

// Requests information. Converts to JSON, sends data to formatData function
async function fetchData(base){
  const response = await fetch(base);
  if (response.ok) {
      data = await response.json();
        await getStateName(data)
        formatData(data);
  }
}

// Assigns variables to data. Formats time, adds degree symbol to temperatures, etc...
function formatData(data){
  temperature.innerHTML = `${data.main.temp.toFixed(0)}${String.fromCharCode(176)}`;
  cityName.innerHTML = data.name;
  const weatherIconCode = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;
  const sunriseTimex = new Date(sunrise * 1000);
  const sunsetTimex = new Date(sunset * 1000);
  weatherIcon.src = iconURL;
  sunriseTime.textContent = sunriseTimex.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  sunsetTime.textContent = sunsetTimex.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  weatherDescription.innerHTML = data.weather[0].description;
  feelsLike.textContent = `${data.main.feels_like.toFixed(0)}${String.fromCharCode(176)}`;
  tempHigh.textContent =   `${data.main.temp_max.toFixed(0)}${String.fromCharCode(176)}`;
  tempLow.textContent =   `${data.main.temp_min.toFixed(0)}${String.fromCharCode(176)}`;
  windSpeed.textContent = data.wind.speed +' mph';
}

// Converts unit from Fahrenheit to Celsius and vice versa
const unitButtonElement = document.getElementById("unit-button");
unitButtonElement.addEventListener("change", changeUnit);
function changeUnit(){
  currentUnit = document.getElementById("unit-button").value;

  if(currentUnit == "Celsius"){
    temperature.innerHTML = `${Math.round((temperature.innerHTML.slice(0,-1) -32)/1.8)}${String.fromCharCode(176)}`;
    feelsLike.textContent = `${Math.round((feelsLike.textContent.slice(0,-1) -32)/1.8)}${String.fromCharCode(176)}`;
    tempHigh.textContent = `${Math.round((tempHigh.textContent.slice(0,-1) -32)/1.8)}${String.fromCharCode(176)}`;
    tempLow.textContent = `${Math.round((tempLow.textContent.slice(0,-1) -32)/1.8)}${String.fromCharCode(176)}`;
  }
  if(currentUnit == "Fahrenheit"){
    temperature.innerHTML = `${data.main.temp.toFixed(0)}${String.fromCharCode(176)}`;
    feelsLike.textContent = `${data.main.feels_like.toFixed(0)}${String.fromCharCode(176)}`;
    tempHigh.textContent =   `${data.main.temp_max.toFixed(0)}${String.fromCharCode(176)}`;
    tempLow.textContent =   `${data.main.temp_min.toFixed(0)}${String.fromCharCode(176)}`;
  }
}

// Listens for the user pressing the enter key on the zip code search box
const search1ButtonElement = document.getElementById("search1");
search1ButtonElement.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchZip();
  }
});

// Takes user specified zip code and passes to formatZipAPICall function to create request for weather in area of zip code
function searchZip(){
  zipCode = document.getElementById("search1").value;
  formatZipAPICall(zipCode);
}

// Listens for the user pressing the enter key on the city name search box
const search2ButtonElement = document.getElementById("search2");
search2ButtonElement.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchCity();
  }
});

// Takes user specified city name and passes to fetchBiggestCity function to filter out duplicate cities and return most relevant
function searchCity(){
  city = document.getElementById("search2").value;
  fetchBiggestCity(city);
}
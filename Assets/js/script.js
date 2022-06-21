// global variables
const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";

const apikey = "8cd90cfd883306f01cb2ce2e7d9d45b7";

// // DOM Elments References
// // #search form, #search-input, #today, #forecast, #history
let searchForm = document.querySelector("#search-form");


let todayBox = document.querySelector("#currentWeather");
let forecastBox = document.querySelector("#forecastCards");
let recentSearches = document.querySelector("#recentSearches");
let searchBtn = document.querySelector("#search-button");

// // add timezone for day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function renderSearchHistory() {
  recentSearches.innerHTML = "";
  for (let index = pastHistory.length; index >= 0; index--) {
    // create the button
    //style button
    // put name of queried city on button
  }
}
var pastHistory = JSON.parse(localStorage.getItem("search-history"));

if (pastHistory) {
  console.log("Success");
  searchHistory.push(searchInput);
}

function createHistory(search) {
  if (searchHistory.indexOf(search) !== -1) {
    return;
  }
  searchHistory.push(search);
  localStorage.setItem("search-history", JSON.stringify(searchHistory));
  renderSearchHistory();
}

function getHistory() {
  //var let us grab the item from local storge
  //consitional : if there is something in local storage, then rende it onto the page
}

function getCityQuards(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input").value;
  var city = document.getElementById('city').innerHTML = searchInput;

  fetch(
    `http:api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=5&appid=${apikey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const cityLon = data[0].lon;
      console.log(cityLon);
      const cityLat = data[0].lat;
      console.log(cityLat);
      getForecast(cityLon, cityLat);
    });
}

function getForecast(cityLon, cityLat) {
  fetch(
    `https:api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=metric&appid=${apikey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderData(data);
    });
}

function renderData (data) {
    var current = data.current;
    console.log(current);
    var currentTemp = document.getElementById('temp').innerHTML = 'Temp: ' + current.temp;
    var currentWind = document.getElementById('wind').innerHTML = 'Wind Speed: ' + current.wind_speed + ' MPH';
    var currentHumidity = document.getElementById('humidity').innerHTML = 'Humidity: ' + current.humidity;
    var currentHumidity = document.getElementById('index').innerHTML = 'UV Index: ' + current.uvi;
  
}

//populate data into html

searchBtn.addEventListener("click", getCityQuards);

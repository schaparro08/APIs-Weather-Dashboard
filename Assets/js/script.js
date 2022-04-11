
// global variables
const searchHistory = [];
const weatherApiUrl = "https://api.openweathermap.org/";

const apikey = "8cd90cfd883306f01cb2ce2e7d9d45b7";

// // DOM Elments References
// // #search form, #search-input, #today, #forecast, #history
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
console.log(searchInput);
let todayBox = document.querySelector("#currentWeather");
let forecastBox = document.querySelector("#forecastCards");
let recentSearches = document.querySelector("#recentSearches")
let searchBtn = document.querySelector("#search-button")

// // add timezone for day.js
dayjs.extend(window.dayjs_plgin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

console.log(searchInput);

// function to display search history
function displaySearchHistory(event) {
    preventDefault(event);
    //get the value of what was being input
 var cities = searchInput.value;
 console.log(cities);
    localStorage.setItem("City Searches", cities);
 
      
  }






// function weatherData(weatherApiUrl) {
//     fetch(weatherApiUrl)
//     .then(function(res) {
//         return res.json()
//     })
//     .then(function(data) {
//         console.log(data)
//     })
// }
// weatherData(weatherApiUrl);
// // make a request to the one call and show them how to make api key
// // fetch coordinates
// // fetch weather
// // function renderItems(city, data) {
// // }
// // 1. geocoding API for lat and long


// function fetchWeather(location) {
//     let { lat } = location;
//     let { long } = location;
//     let cityName = location.name;
//     let apiurl = ${weatherApiUrl}...;
// }


searchBtn.addEventListener("click", displaySearchHistory());
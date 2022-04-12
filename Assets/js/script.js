
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
function displaySearchHistory() {
recentSearches.innerHTML= "";
//Create a for loop that for each search, input is added to the button. Set I equal to 3
    
 
  

  }

  // Function to append everything to the search history
  // Local storage function
  function appendSearchHistory(){
    
    //Local storage set item
    //json stringify 
    
  }


  function dayilyWeather () {
// add code  from slack

  }


  function forecasting () {


    // for the five day forcast
    //create element, set attribute
    // for loop for all 5 days of the week

    //add code from slack 

  }








// function weatherData(weatherApiUrl) {
  // let { lat } = location;
  //     let { long } = location;
  //     let cityName = location.name;
  // comment: use entire api link here
  //     let apiurl = ${weatherApiUrl}...;
//     fetch(weatherApiUrl)
//     .then(function(res) {
//         return res.json()
//     })
//     .then(function(data) {
  // // function renderItems(city, data) {
// // }
//         console.log(data)
//     })
// }

// function weatherData(weatherApiUrl);
// // make a request to the one call and show them how to make api key
// // fetch coordinates
// // fetch weather

// // 1. geocoding API for lat and long


searchBtn.addEventListener("click", displaySearchHistory());
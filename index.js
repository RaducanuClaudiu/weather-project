// Luam valoarea cheii city din localStorage
let currentCityFromLS = localStorage.getItem("city");

// Pasul urmator este sa actualizam orasul afisat pe eran daca avem cheia city in localStorage.
const currentCityTag = document.querySelector(".current-city");
if (!currentCityFromLS) {
    localStorage.setItem("city", "București");
    currentCityTag.innerHTML = "București";
    currentCityFromLS = "București"
}
 // Daca nu avem cheia 'city' in localStorage atunci setam ca valoare default Bucuresti.
if (currentCityFromLS) {
    currentCityTag.innerHTML = currentCityFromLS;

   
}

// Afisam vremea curenta folosind o functie din alt fisier.
 displayCurrentWeather(currentCityFromLS);
//  Afisam vremea pe urmatoarele 5 zile.
displayWeatherForecast(currentCityFromLS);
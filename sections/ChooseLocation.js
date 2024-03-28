const bucharestButton = document.querySelector('.dropdown-menu li .bucharest');
const timisoaraButton = document.querySelector('.dropdown-menu li .timisoara');
const oradeaButton= document.querySelector('.dropdown-menu li .oradea');
const aradButton = document.querySelector('.dropdown-menu li .arad');
const sibiuButton = document.querySelector('.dropdown-menu li .sibiu');

// declaram o functie care sa ne schimbe orasul curent
 function updateCurrentCity(city) {
    // Mai intai trebuie sa selectez elementul care imi tine orasul curent 
    const currentCityElem = document.querySelector('.current-city');
    currentCityElem.innerHTML = city; 
 }
// Declaram o functie care ne va schimba orasul si ne va face update la vreme 
function updateWeather(city) {
    // primul apel a fost cu bucuresti - deci valoarea parametrului city este Bucuresti => city = Bucuresti
    // reafisam vremea curenta in functie de orasul selectat
    displayCurrentWeather(city);
    // actualizam orasul afisam pe eracn - o sa ne ajutam de alta functie:apelex functia updateCurrentCity
    updateCurrentCity(city);
}

// Adaugam event listeneri pe fiecare element in parte - adica pe fiecare buton din drop-down.
bucharestButton.addEventListener('click', function (){
    // la click pe button Bucuresti ar trebui sa schimb numele orasului
    // Si al 2 lea lucru sa fac update la vreme
    updateWeather("București")
})
oradeaButton.addEventListener('click', function (){
    // la click pe button Bucuresti ar trebui sa schimb numele orasului
    // Si al 2 lea lucru sa fac update la vreme
    updateWeather("Oradea")
})
timisoaraButton.addEventListener('click', function (){
    // la click pe button Bucuresti ar trebui sa schimb numele orasului
    // Si al 2 lea lucru sa fac update la vreme
    updateWeather("Timișoara")
})
aradButton.addEventListener('click', function (){
    updateWeather("Arad")
})
sibiuButton.addEventListener('click', function (){
    updateWeather("Sibiu")
})
// declaram o functie care sa ne schimbe orasul curent
function updateCurrentCity(city) {
    // Mai intai trebuie sa selectez elementul care imi tine orasul curent 
    const currentCityElem = document.querySelector('.current-city');
    currentCityElem.innerHTML = city; 
 }
// Declaram o functie care ne va schimba orasul si ne va face update la vreme 
function updateWeather(cityName) {
    // Actualizam orasul selectat din dropdown in localStorage 
    localStorage.setItem("city", cityName);
    // primul apel a fost cu bucuresti - deci valoarea parametrului city este Bucuresti => city = Bucuresti
    // reafisam vremea curenta in functie de orasul selectat
    displayCurrentWeather(cityName);
    displayWeatherForecast(cityName);
    // actualizam orasul afisam pe eracn - o sa ne ajutam de alta functie:apelex functia updateCurrentCity
    updateCurrentCity(cityName);
}

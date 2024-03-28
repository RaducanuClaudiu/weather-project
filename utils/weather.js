// Imi definesc o functie care sa-mi returneze iconita de la open weather pe baza codului primit de la API.
function getWeatherIcon (iconCode){
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
} 

// primim viteza vantului in metrii/secunda si noi vrem sa-i convertim in km/h
function windToKmPerHour(meterPerSec){
    return (meterPerSec * 3600) / 1000;
    
}
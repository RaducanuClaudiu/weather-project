// API KEY-urile in general nu sunt stocate in format text, in codul nostru, deoarece oricine ar putea sa le vada si sa le foloseasca. Este bine ca ele sa stea pe server, dar in cazul nostru fiind un API gratuit o sa le stocam aici.

const API_KEY='84e0ba25a09126ecff1cd4929311e7b6';

// Construim link-urile (endpont-urile) catre care noi o sa facem request-uri cu JS
function getCurrentWeatherEndpoint(city){
return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

// Declaram a doua functie pe care o vom folosi pentru a ne lua URL-ul catre API-ul ce ne returneaza date despre vremea pe 5 zile. 
function getForecastWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
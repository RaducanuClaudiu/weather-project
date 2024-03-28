// Declar functia care imi va afisa vremea pe urmatoarele 5 zile, iar apelul functiei se va face pe index.js
function displayWeatherForecast(city) {
  // Prima data ne generam link-ul API-ului catre care vom face request-ul.
  const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);

  // Imi selectez elementul cu clasa .weather-forecast deoarece aici am sa inserez html-ul generat in faza de fetch.
  const weatherForecastContainer = document.querySelector(".weather-forecast");
  // Inainte de a face call-ul catre server (adica inainte de fetch) am sa golesc container-ul de weatherForecastContainer
  weatherForecastContainer.innerHTML = "";

  // Facem request-ul catre API
  fetch(forecastWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Ne folosim de object destructuring pentru a accesa doar proprietatea list din obiectul data.
      // putem scrie condul de mai jos in doua moduri:
      // const listdetails = data.list;
      // const listCity = data.city;
      const { list } = data;

      //Ne declaram un obiect gol in care o sa ne tinem predictiile pe zile (Luni, Marti, Miercuri, Joi...)
      const daysMap = {};

      // Iteram prin cele 40 de predictii primite de la server - adica prin fiecare element al array_ului list

      list.forEach((element) => {
        // Extragem proprietatea dt din fiecare element al array-ului
        //  console.log(element);
        const { dt } = element;
        const day = getDayOfTheWeek(dt);
        // Daca avem deja ziua saptamanii in obiectul daysMap, ii adaugam o noua predictie - adica ii adaugam element
        if (daysMap[day]) {
          daysMap[day].push(element);

          // Altfel, daca nu avem ziua saptamanii in obiectul daysMaps o sa adaugam ziua respectiva impreuna cu element-ul (sau predictia)
        } else {
          daysMap[day] = [element];
        }
      });
      // Iteram prin obiectul daysMap care are deja datele grupate pe zile, folosind instructiunea for...in - adica fiecare cheie din obiect reprezinta o zi a saptamanii

      for (dayKey in daysMap) {
        // Inserez in HTML ziua din obiectul daysMap
        weatherForecastContainer.innerHTML += `<h3 class="text-primary">${dayKey}</h3>`;
        // Imi extrag elementul curent din obiectul daysMap
        // console.log(dayKey);
        let weatherByDays = daysMap[dayKey];
        weatherByDays.forEach((element) => {
          //  Pentru fiecare eleement (predictie) pot sa ma apuc sa extrag datele de interes
          const { dt, main, weather } = element;
          // Procesez ora
          const hour = getHour(dt);
          // Rotunjim termperatura
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          // Atentie la descriere deoarece weather este un array, cu un singur element -> accesam mereu elementul 0.
          const description = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          // inseram in html toate datele de mai sus
          weatherForecastContainer.innerHTML += `
                <div class="weather-forecast-box d-flex justify-content-between align-items-center w-100 border rounded mb-3 p-3">
                <div>${hour}</div>
                <div><img src="${weatherIcon}"/></div>
                <div class="fs-3"><strong>${temperature}°C</strong></div>
                <div>${description}</div>
                <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                </div>
                `;
        });
      }
    });
}

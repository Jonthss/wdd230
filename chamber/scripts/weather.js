// Função para buscar dados do clima

async function fetchWeather() {
    const apiKey = "64ed82577ced7f69cb1687f0ce536131"; 
    const city = "Campina Grande"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) { 
            updateWeatherCard(data);
            displayResults(data); // Chama a função para exibir a imagem e descrição
        } else {
            console.error("Erro ao buscar dados do clima:", data.message);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

function updateWeatherCard(data) {
    document.getElementById("temperature").textContent = Math.round(data.main.temp);
    document.getElementById("weather-condition").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind-speed").textContent = data.wind.speed;
}

function displayResults(data) {
    const weatherIcon = document.getElementById("weather-icon");
    const captionDesc = document.getElementById("caption-desc");

    // Usa a URL correta para imagem 2x
    const iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

window.onload = fetchWeather;

async function fetchForecast() {
    const apiKey = "64ed82577ced7f69cb1687f0ce536131"; 
    const city = "Campina Grande"; 
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "200") {
            displayForecast(data.list);
        } else {
            console.error("Erro ao buscar previsão:", data.message);
        }
    } catch (error) {
        console.error("Erro na requisição da previsão:", error);
    }
}

function displayForecast(forecastList) {
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = ""; // limpa qualquer conteúdo anterior

    const dailyForecasts = {};

    // Filtrar uma previsão por dia, de preferência ao meio-dia
    forecastList.forEach(forecast => {
        const date = forecast.dt_txt.split(" ")[0];
        const hour = forecast.dt_txt.split(" ")[1];

        if (hour === "12:00:00" && !dailyForecasts[date]) {
            dailyForecasts[date] = forecast;
        }
    });

    // Pegar os 3 próximos dias
    const days = Object.keys(dailyForecasts).slice(0, 3);

    days.forEach(date => {
        const forecast = dailyForecasts[date];
        const iconCode = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const description = forecast.weather[0].description;
        const temp = Math.round(forecast.main.temp);

        const spotlight = document.createElement("div");
        spotlight.className = "spotlight";

        spotlight.innerHTML = `
            <h3>${new Date(date).toLocaleDateString("en-GB", { weekday: 'long', day: 'numeric', month: 'short' })}</h3>
            <img src="${iconUrl}" alt="${description}">
            <p><strong>${temp}°C</strong></p>
            <p>${description}</p>
        `;

        forecastContainer.appendChild(spotlight);
    });
}

window.onload = () => {
    fetchWeather();
    fetchForecast();
};
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


window.onload = fetchWeather;

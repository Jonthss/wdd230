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
    // Obtém o elemento do ícone do clima
    const weatherIcon = document.getElementById("weather-icon");
    const captionDesc = document.getElementById("caption-desc");

    // Obtém a URL da imagem do ícone
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // Obtém a descrição do clima
    let desc = data.weather[0].description;

    // Define o ícone e os atributos
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Define o texto da descrição
    captionDesc.textContent = desc;
}

window.onload = fetchWeather;

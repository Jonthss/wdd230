// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define the URL for OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=64ed82577ced7f69cb1687f0ce536131';

// Define the function to fetch data from the API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing, output data to console
            displayResults(data); // Call the function to display results
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the results in the HTML
function displayResults(data) {
    // Get the current temperature
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    // Get the icon image URL
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // Get the weather description
    let desc = data.weather[0].description;

    // Set the icon source and attributes
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Set the description text
    captionDesc.textContent = `${desc}`;
}

// Invoke the apiFetch function
apiFetch();

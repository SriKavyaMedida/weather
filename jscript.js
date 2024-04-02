async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = `'d98420824ccc2c11fc09cdb9bec472e2'`;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=d98420824ccc2c11fc09cdb9bec472e2&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('weatherDisplay').innerHTML = 'Failed to retrieve weather data.';
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    document.getElementById('weatherDisplay').innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>${weather[0].main} - ${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}
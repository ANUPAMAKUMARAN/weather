function search() {
    const city = document.getElementById('result').value;
    const apiKey = '5fe36b192ffd1c36dffb6752bc1722b2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            document.getElementById('overlay-temperature').innerText = `${data.main.temp}°C`;
            document.getElementById('overlay-description').innerText = data.weather[0].description;
            document.getElementById('overlay-location').innerText = data.name;
            document.getElementById('overlay-date-time').innerText = new Date().toLocaleString();

          
            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C, feels like ${data.main.feels_like}°C`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} km/h`;
            document.getElementById('pressure').innerText = `Pressure: ${data.main.pressure} hPa`;
            document.getElementById('date-time').innerText = new Date().toLocaleString();

           
            document.getElementById('weather-info').style.display = 'block';
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Failed to retrieve weather data. Please check the city name and try again.");
        });
}
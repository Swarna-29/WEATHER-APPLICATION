const apiKey = "ce52b7fa360bebb8c6af1459803c52fb";

function getWeather() {
    let city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherResult").innerHTML = <p>City not found.</p>;
            } else {
                let temp = data.main.temp;
                let weather = data.weather[0].description;
                let icon = http://openweathermap.org/img/wn/${data.weather[0].icon}.png;

                document.getElementById("weatherResult").innerHTML = `
                    <h3>${city}</h3>
                    <img src="${icon}" alt="Weather Icon">
                    <p>Temperature: ${temp}°C</p>
                    <p>Condition: ${weather}</p>
                `;
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
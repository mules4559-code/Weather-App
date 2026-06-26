async function getWeather(){
    const city = document.getElementById("city").ariaValueMax;
    const apikey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        if(data.cod == "404"){
            document.getElementById("weatherResult").innerHTML = 
            "City not found!";
            return;
        }
        document.getElementById(WeatherResult).innerHTML = 
        `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}degree C </p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    }catch(error){
        doocument.getElementById("weatherResult").innerHTML = "Error fetching weather data.";
    }
}
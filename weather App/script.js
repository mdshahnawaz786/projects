const searchInput = document.getElementById('search_input');
const searchButton = document.getElementById('search_button');
const season = document.getElementById('season');
const weatherImage = document.getElementById('weather_image');
const temperatureBlock = document.getElementById('temperature');
const cityName = document.getElementById('season');
const windSpeedBlock = document.getElementById('wind_speed');
const humidityBlock = document.getElementById('humidity');
const cloudinessBlock = document.getElementById('cloudiness')

init()

function init() {
    getCurrentLocation()
    searchButton.addEventListener('click', fetchWeatherUsingCity)
}

function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((data) => {
        const {latitude, longitude} = data.coords 
        fetchWeatherUsingLatitudeLongitude(latitude, longitude)
    })
}


async function fetchWeatherUsingCity() {
    const location = searchInput.value;
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=133aca6a3bda2d32fd31c9ab64ad4343`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    console.log(jsonData)
    renderUI(jsonData)
}

async function fetchWeatherUsingLatitudeLongitude(lat, long) {
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=133aca6a3bda2d32fd31c9ab64ad4343`);
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    renderUI(jsonData);
    searchInput.value = jsonData.name
}

function renderUI(jsonData) {
    const weatherDescription = jsonData.weather[0].description
    const weatherIcon = jsonData.weather[0].icon
    let temperature = jsonData.main.temp
    temperature = temperature - 273;
    let temp = Math.round(temperature)
    const humidity = jsonData.main.humidity
    const windSpeed = jsonData.wind.speed
    const cloudiness = jsonData.clouds.all
    season.innerText = weatherDescription
    weatherImage.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
    temperatureBlock.innerHTML = `${(temp)}&deg;C`
    cityName.innerText = jsonData.name
    windSpeedBlock.innerText = `${windSpeed} %`
    humidityBlock.innerText = `${humidity} %`
    cloudinessBlock.innerText = `${cloudiness} %`
}
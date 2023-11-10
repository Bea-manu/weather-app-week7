function searchcity(city){
    let apiKey="8f0ab40o57b12e2t3b934b3b4137cfbc";
    let apiUrl="https://api.shecodes.io/weather/v1/current?query=${city}&key=${8f0ab40o57b12e2t3b934b3b4137cfbc}$unit=metric";
   axios.get(apiUrl).then(updateWeather);
}
function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let tempreture = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = docment.querySelector("#humidity");
    let windspeedElement = document.querySelector("#windspeed");
    let timeElement = document.querySelector("#time");
    let date = new data(response.data.time * 1000);

}

cityElement.innerHTML = response.data.city;
timeElement.innerHTML = formatDate(date);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windspeedElement.innerHTML = `${response.data.windspeed}km/h`;
temperatureElement.innerHTML = math.round(temperature); 
 
function formatDate(date){
    let minutes = date.getMinutes;
    let hours = date.getHours;
    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
    let day = days[date.getDay()];
}

return `${day},${hours}:${minutes}`;
if(minutes <10) minutes="o${minutes}";

function searchcity(city){
    let apiKey="8f0ab40o57b12e2t3b934b3b4137cfbc";
    let apiUrl="https://api.shecodes.io/weather/v1/current?query=${city}&key=${8f0ab40o57b12e2t3b934b3b4137cfbc}$unit=metric";
   axios.get(apiUrl).then(updateWeather);
}

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')
const apiKey = "afe803993451d8ac7dad61772b10adb8";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric";

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector('.city').innerHTML = data.city.name;
  document.querySelector('.temp').innerHTML = Math.round(data.list[0].main.temp) + '°C';
  document.querySelector('.humidity').innerHTML = data.list[0].main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.list[0].wind.speed + ' km/h';



  //if statement to change the weather images
  if(data.weather[0].main == 'Clouds') {
    weatherIcon.src = 'images/clouds.png';
    console.log('it is cloudy');
  }
  else if(data.weather[0].main == 'Clear') {
    weatherIcon.src = 'images/clear.png';
    console.log('it is clear');
  }
  else if(data.weather[0].main == 'Rain') {
    weatherIcon.src = 'images/rain.png';
    console.log('it is Rainy');
  }
  else if(data.weather[0].main == 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
    console.log('it is Drizzling');
  }
  else if(data.weather[0].main == 'Snow') {
    weatherIcon.src = 'images/snow.png';
    console.log('it is snowing');
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
  console.log('working fine');
  document.querySelector('.weather').style.display = 'block';
});

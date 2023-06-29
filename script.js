
const weather = document.querySelector('.weather');
const btn = document.querySelector('button');



btn.addEventListener('click', () => {
  openWeatherWithDelay();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    openWeatherWithDelay();
   
  }
});

function openWeatherWithDelay() {
  setTimeout(() => {
    weather.style.display = 'block';
    weather.style.transition = 'all 0.7s ease';
    console.log('It has been clicked');
  }, 1000); // Delay of 2000 milliseconds (2 seconds)
}


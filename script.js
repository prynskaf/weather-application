// selected element 
const cityName = document.querySelector('#cityNameInput');
const submitBtn = document.querySelector('#submitButton');
const resultsContainer = document.querySelector('.resultsContainer');
const  result = document.querySelector('.resultSelect')

 submitBtn.addEventListener('click', async () => {
    //get the values entered in the name input and country selected field
    const city = cityName.value
    console.log( 'city:' , city)


const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afe803993451d8ac7dad61772b10adb8`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const name = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const weather = data.weather[0]["main"];


    console.log( `Country: ${country}, City: ${name}, weather: ${weather}, temp: ${temp}`
    );
    
    //adding the data to my results
  })
  .catch((error) => console.error(error));

  //
});


const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
const desc = document.querySelector('.description');
const temp = document.querySelector('.temperature');

function fetchWeatherAPI(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=18b436d09f569301eac985b0f5e654f9&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const nameValue = data.name;
        const tempValue = data.main.temp;
        const descValue = data.weather[0].description;

        name.textContent = nameValue;
        temp.textContent = tempValue;
        desc.textContent = descValue;
    })
    .catch(err => alert("WRONG CITY NAME!"))
}

button.addEventListener('click', fetchWeatherAPI);
var cityInput = document.getElementById("cityInput");
var add = document.getElementById("add");
var cityoutput = document.getElementById("cityoutput");
var description = document.getElementById("description");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");

const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

function convert (data){
    return (data-273).toFixed(2);
}

async function loadWeather() {
    var weathers = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${cityInput.value}&appid=${apiKey}`)).json();

    values(weathers);
}

function values(info){
    var city=info["name"];
    var desc=info["weather"][0]["description"];
    var temperatue=info["main"]["temp"];
    var windSpeed=info["wind"]["speed"];

    cityoutput.innerHTML=`city name: ${city}`
    description.innerHTML=`description: ${desc}`
    temp.innerHTML=`temprature: ${convert(temperatue)}`
    wind.innerHTML=`wind speed: ${windSpeed} km/h`

}

add.addEventListener('click',loadWeather)


// await use to return promise values
// 'call back' method: use a function as another function input value
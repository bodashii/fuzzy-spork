const formInput = document.getElementById("city");
const cityEl = document.getElementById("cityEl");
const tempData = document.getElementById("tempData");
const windData = document.getElementById("windData");
const humidityData = document.getElementById("humidityData");
const uvData = document.getElementById("uvData");

const formHandler = (e) => {
    e.preventDefault();
    const city = formInput.ariaValueMax.trim();

    if (city) {
        getCityData(city);

        cityEl.textContent = "";
        formInput.value = "";
    } else {
        alert("Something went wrong...");
    }
}

function getCityData(city) {
    const cityData =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
        "db1e55b08dcc390b353d763a40a58393";
    
    fetch(apiUrl)
        .then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    console.log(data);
                    displayCityWeather(data, city);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch((error) => {
            alert("Issue connecting to data");
        });
}
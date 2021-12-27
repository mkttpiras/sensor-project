const fetchTemperature = () => {
    fetch('/temperature')
        .then(results => results.text())
        .then(text => {
            const temperatureDisplay = document.querySelector('#temperature-display');
            temperatureDisplay.innerHTML = text;
        })
};

const fetchHumidity = () => {
    fetch('/humidity')
        .then(results => results.text())
        .then(text => {
            const humidityDisplay = document.querySelector('#humidity-display');
            humidityDisplay.innerHTML = text;
        })
};

setInterval(() => {
    fetchTemperature();
    fetchHumidity();
}, 2000);
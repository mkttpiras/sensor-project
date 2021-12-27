fetch('/temperature')
    .then(results => results.text())
    .then(text => {
        console.log(text);
        const temperatureDisplay = document.querySelector('#temperature-display');
        temperatureDisplay.innerHTML = text;
    })
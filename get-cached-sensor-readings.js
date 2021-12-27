const getSensorReadings = require('./get-sensor-readings');

const cache = {
    temp: 0,
    hum: 0
};

setInterval(() => {
    getSensorReadings((err, temp, hum) => {
        if (err) return console.error(err);
        cache.temp = temp;
        cache.hum = hum;
    })
}, 2000)

module.exports.getTemperature = () => cache.temp;
module.exports.getHumidity = () => cache.hum;
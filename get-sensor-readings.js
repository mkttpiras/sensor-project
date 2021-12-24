const sensor = require('node-dht-sensor');

const getSensorReadings = callback => {
    sensor.read(11, 4, (err, temp, hum) => {
        if (err) {
            return callback(err);
        }
        callback(null, temp, hum);
    })
}

module.exports = getSensorReadings
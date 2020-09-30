const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=20f4f7cc1829edbe4c96263dadff8511'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(
                undefined, 'Feels like ' + body.main.temp + ' kelvin out, '+ body.main.pressure +' mm hg of pressure, ' + body.main.humidity + 'gm/m^3 of humidity'
            );
        }
    });
};

module.exports = forecast
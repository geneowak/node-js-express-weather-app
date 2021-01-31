const request = require('request')
require('dotenv').config();

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service.')
        }
        else if (body.error) {
            callback('Unable to find location.')
        }
        else {
            const data = body.current;
            callback(undefined, `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast;
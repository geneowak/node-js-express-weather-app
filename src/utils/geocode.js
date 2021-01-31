const request = require('request');
require('dotenv').config();

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.ACCESS_TOKEN}&limit=1`

    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('unable to conect to location services')
        }
        else if (!body.features || body.features.length ==0) {
            callback('Unable to find location. Try another search.')
        }
        else {
            const data = body.features[0]
            callback(null, {
                location: data.place_name,
                latitude: data.center[1],
                longitude: data.center[0]
            })
        }
    })
}

module.exports = geocode;
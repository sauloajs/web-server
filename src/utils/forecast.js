const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=67e829aab2ccb529aef308256c703efe&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('unable to find location.', undefined)
        } else {
            const {current} = body
            console.log(current)
            callback(undefined, {
                temperature: current.temperature, 
                feelslike: current.feelslike,
                humidity: current.humidity
            })
        }
    })
} 

module.exports = forecast
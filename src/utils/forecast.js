 const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d6e1d81efc23a955a945520c08027592/' + latitude + ',' + longitude
    console.log(url)

    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            temperature = (body.currently.temperature - 32)/1.800
           // callback(undefined, body.daily.data[0].summary + ' It is currently ' +temperature.toFixed(1) + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
           callback(undefined,{
            temp : temperature.toFixed(1),
            wind : body.currently.windSpeed,
            humidity : body.currently.humidity,
            rain : body.currently.precipProbability,
            summary :body.hourly.summary 
           })
        }
    })
}

module.exports = forecast




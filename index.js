// Libraries
const request = require('request');
const argv = require('yargs').argv;

// Variables
let apiKey = 'b059a171c84641698bf17527be184e2b';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Requesting
request(url, (err, res, body) => {
    
    if(err){
        console.log('error: ', error);
    } else {
        let weather = JSON.parse(body);
        let message = {
            temp: weather.main.temp,
            pressure: weather.main.pressure,
            humidity: weather.main.humidity,
            visibility: weather.visibility,
            wind: weather.wind,
            city: weather.name
        };
        console.log(message);
    }
    
});



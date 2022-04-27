const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6ea568926909526bb84773808fbc165c&query="+latitude+','+longitude;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temp = body.current.temperature;
      const feelslike = body.current.feelslike;
      callback(undefined,  `${body.current.weather_descriptions[0]}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`);
    }
  });
};

module.exports = forecast;

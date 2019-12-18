const request = require("request");
var cityName = city => {
  request(
    {
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=52386e314b0eb6213d98c8d6c3be50c2",
      json: true
    },
    (error, response, body) => {
      if (error) console.log("server connection lost");
      if (body.cod === "404") {
        console.log("wrong city inputted");
      } else {
        console.log("CITY NAME:-  " + body.name);
        console.log("COUNTRY NAME:- " + body.sys.country);
        console.log("CITY LATTITUDE:- " + body.coord.lat);
        console.log("CITY LONGITUDE:- " + body.coord.lon);
        console.log("CITY WEATHER TYPE:- " + body.weather[0].main);
        console.log("CITY TEMPRATURE IS:- " + body.main.temp + " IN KELVIN");
        console.log("WIND SPEED:- " + body.wind.speed);
      }
    }
  );
};

module.exports.cityName = cityName;

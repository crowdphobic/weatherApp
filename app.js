var geocode = require("./geolocation/geocode.js");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
// taking input from the user
readline.question("please enter indian city name \n", city => {
  geocode.cityName(city);
  readline.close();
});

//end of user input

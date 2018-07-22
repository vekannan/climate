var request = require('request');
var location = require('./google-location');
var weather = require('./weather');
var climate = (loc) => {
    var app = {
      getWeather : (callback) => {
        location.addressDetails(loc, (errorMessage,result) => {
          if(errorMessage){
            callback('Error while parsing address reason ==> ' + errorMessage);
          }else{
            weather.getTempurature(result.location, (error,report) => {
              if(error){
                callback( 'Error while getting weather for the given location. Reason ==> ' + error,undefined);
              }else{
              //  console.log(error);
              // console.log(`Weather for the given location is ==> ${report}`);
                callback(undefined,report);
              }
            });
          }
        });
      }
    };

    return app;
}

module.exports = climate;

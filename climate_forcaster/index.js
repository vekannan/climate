var climate = require('./weather_app/climate')

var getCurrentLocationWeather = (loc) => {
   climate(loc).getWeather((err,weather) => {
     if(err){
       console.log(err);
     }else{
       console.log(`Weather now reported as ${weather}`);
     }
   });

}
module.exports = getCurrentLocationWeather;

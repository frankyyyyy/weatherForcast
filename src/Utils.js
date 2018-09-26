import cloudy from './images/cloudy.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import sunny from './images/sunny.png';
import thunderStorm from './images/thunderStorm.png';


var CITIES = {
    sydney:{lat:'-33.8688',lon:'151.2093'},
    brisbane:{lat:'-27.4698',lon:'153.0251'},
    melbourne:{lat:'-37.8136',lon:'144.9631'},
    snowyMountains:{lat:'-36.5000',lon:'148.3333'},
}

export function chooseCity(cityName){
    switch (cityName) {
        case 'sydney':
            return CITIES.sydney;
        case 'brisbane':
            return CITIES.brisbane;
        case 'melbourne':
            return CITIES.melbourne;
        default:
            return CITIES.snowyMountains;
    }
}
export function choosePic(weatherName){
    if(weatherName.includes("cloud")){
        return cloudy;
    }else if(weatherName.includes('rain')){
        return rain;
    }else if(weatherName.includes('snow')){
        return snow;
    }else if(weatherName.includes('sun')){
        return sunny;
    }else{
        return thunderStorm;
    }
}
export function calFiveDays(today, data){
    var result = {};
    var current = [];
    var first = '';
    var second = '';
    var third = '';
    var forth = '';
    var fifth = '';
    var count = 0;
    var dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    for(var row of data){
        var date = row.datetime;
        if(date!=today){
            var temp = row.temp;
            var day = dayArr[date.getDay()];

        }
    }

}
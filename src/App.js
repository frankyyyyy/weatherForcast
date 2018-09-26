import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import background from './images/background.jpg';
import LargeWeatherTag from './components/LargeWeatherTag';
import SmallWeatherTagRow from "./components/SmallWeahterTagRow";
import { chooseCity, choosePic } from "./Utils";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false,
            cityNames: ['sydney','brisbane','melbourne',"snowyMountains"],
            current: 0,
            currentLat: '-33.8688',
            currentLon: '151.2093',
            dateTime: '',
            city: '',
            weatherPic: '',
            temp: '',
            tempHigh: '22',
            tempLow: '6',
            weatherName: ""
        }
        this.leftOnClick = this.leftOnClick.bind(this);
        this.rightOnClick = this.rightOnClick.bind(this);
    }
    componentDidMount(){
        this.retrieveLocationData(this.state.currentLat, this.state.currentLon);
        this.retrieveData(this.state.currentLat, this.state.currentLon);
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.update==false){
            return false;
        }else{
            return true;
        }
    }
    leftOnClick(){
        var index = this.state.current
        if(index>0){
            index--;
            var cityName = this.state.cityNames[index];
            var laty = chooseCity(cityName).lat;
            var lony = chooseCity(cityName).lon;
            this.retrieveLocationData(laty, lony);
            this.retrieveData(laty, lony);
            this.setState({
                current: index,
                currentLat: laty,
                currentLon: lony,
                update: false
            })
        }
    }
    rightOnClick(){
        var index = this.state.current
        if(index<3){
            index++;
            var cityName = this.state.cityNames[index];
            var laty = chooseCity(cityName).lat;
            var lony = chooseCity(cityName).lon;
            this.retrieveLocationData(laty, lony);
            this.retrieveData(laty, lony);
            this.setState({
                current: index,
                currentLat: laty,
                currentLon: lony,
                update: false
            })
        }
    }
    retrieveLocationData(lat, lon) {
        var firstUrl = 'https://weatherbit-v1-mashape.p.mashape.com/current?lat=';
        var secondUrl = '&lon=';
        var that = this;
        $.ajax({
            url: firstUrl + lat +  secondUrl + lon,
            headers:{"X-Mashape-Key": "wSo0LRcHZMmsh4rXshasAImNK7Ulp19zkGQjsnUjeMXsnpyilC"},
            success: function(res){
                console.log(res)
                var date = res.data[0].datetime
                var newCity = res.data[0].city_name;
                var newTemp = res.data[0].temp;
                var newWeatherName = res.data[0].weather.description;
                that.setState({
                    dateTime: date,
                    city: newCity,
                    temp: newTemp,
                    weatherName: newWeatherName,
                    weatherPic: choosePic(newWeatherName),
                    update: true
                })
            },
            error: function(err){console.log(err);}  //network error
        });
    }
    retrieveData(lat, lon) {
        var firstUrl = 'https://weatherbit-v1-mashape.p.mashape.com/forecast/3hourly?lat=';
        var secondUrl = '&lon=';
        $.ajax({
            url: firstUrl + lat +  secondUrl + lon,
            headers:{"X-Mashape-Key": "wSo0LRcHZMmsh4rXshasAImNK7Ulp19zkGQjsnUjeMXsnpyilC"},
            success: function(res){
                console.log(res)
                res.data[0]
            },
            error: function(err){console.log(err);}  //network error
        });
    }
      render() {
          console.log(this.state.current)
          console.log(this.state.currentLat)
          console.log(this.state.currentLon)

        var baseStyle = {
            // height: '943px',
            backgroundImage: `url(${background})`,
            backgroundSize: '100% 100%',
        }

        var lineStyle = {
            backgroundColor: 'white',
            width: '500px',
            height: '2px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.3'
            // marginTop: '5%'
        }
        return (
          <div className="App" style={baseStyle}>
              <div>
                  <LargeWeatherTag
                      city={this.state.city} temp={this.state.temp}
                      weatherName={this.state.weatherName} weatherPic={this.state.weatherPic}
                      leftOnClick={this.leftOnClick} rightOnClick={this.rightOnClick}/>
                  <div style={lineStyle}></div>
                  <SmallWeatherTagRow
                      />
              </div>
          </div>
        );
      }
}

export default App;

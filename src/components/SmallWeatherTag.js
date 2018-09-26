import React, {Component} from "react";
import rain from "../images/rain.png";


class SmallWeatherTag extends Component{
    constructor(props){
        super(props)
        this.state = {
            day: 'Mon',
            weatherPic: rain,
            tempHigh: '22',
            tempLow: '16',
            pStyle: {
                float: 'left',
                margin: '10px'
            }
        }
    }
    render(){
        return(
            <div style={this.state.pStyle}>
                <p>{this.state.day}</p>
                <img src={this.state.weatherPic} height="60px" width="70px"/>
                <p>{this.state.tempHigh}/{this.state.tempLow}</p>
            </div>
        );
    }
}

export default SmallWeatherTag;
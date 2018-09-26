import React, { Component } from "react";
import left from '../images/leftArrow.png';
import right from '../images/rightArrow.png';

class LargeWeatherTag extends Component{
    constructor(props){
        super(props);
        this.state = {
            leftPic: left,
            rightPic: right,
            // city: '',
            // weatherPic: '',
            // temp: '',
            // tempHigh: '22',
            // tempLow: '6',
            // weatherName: ""
        };

    }
    render(){
        var wholeStyle = {
            color: 'white'
        }

        var cityStyle = {
            size: '220px'
        }

        var picStyle = {
            marginTop: '20px',
            marginLeft: '110px',
            marginRight: '110px'
        }

        let temp = this.props.tempLow + ' ' + this.props.tempHigh

        return(
            <div style={wholeStyle}>
                <div style={cityStyle}>{this.props.city}</div>
                <div>
                    <img src={this.state.leftPic} height="50px" width="50px" onClick={this.props.leftOnClick}/>
                    <img src={this.props.weatherPic} style={picStyle} height="100px" width="140px"/>
                    <img src={this.state.rightPic} height="50px" width="50px" onClick={this.props.rightOnClick}/>
                </div>
                <p>{this.props.temp}</p>
                <p>{temp}</p>
                <p>{this.props.weatherName}</p>
            </div>
        )
    }
}

export default LargeWeatherTag;
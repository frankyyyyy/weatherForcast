import React, {Component} from "react";
import SmallWeatherTag from "./SmallWeatherTag";



class SmallWeatherTagRow extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){

        var tag = <SmallWeatherTag/>;
        var row = [];
        for(var x = 0; x < 5; x++){
            row.push(tag);
        }

        var pStyle = {
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

        return(
            <div style={pStyle}>
                {row}
            </div>
        );
    }
}

export default SmallWeatherTagRow;
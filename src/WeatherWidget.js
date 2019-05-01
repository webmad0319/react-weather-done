import React from 'react';
import "./WeatherWidget.css"
import * as d3 from "d3";

class WeatherWidget extends React.Component {
  render() {
    var colorScale = d3.scaleLinear().domain([this.props.minTemp, this.props.maxTemp]).range(["green", "red"])
    var rgb = colorScale(this.props.temp)

    return (
        <div className="WeatherWidget" style={{backgroundColor: rgb}}>
            <h1>{this.props.city}</h1>
            <h1>{this.props.temp}°C</h1>
        </div>
    )
  }
}

export default WeatherWidget;

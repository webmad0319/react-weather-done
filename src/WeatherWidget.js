import React from 'react';
import "./WeatherWidget.css"
import * as d3 from "d3";

class WeatherWidget extends React.Component {
    render() {
        let weatherIcons = {
            cloudy: "wi-cloudy",
            "mostly cloudy": "wi-cloudy",
            "partly cloudy": "wi-cloudy",
            "part cloudy": "wi-cloudy",
            storm: "wi-lightning",
            sunny: "wi-day-sunny",
            fog: "wi-fog",
            "light rain": "wi-showers"
        };

        var imgStr = "svg/" + weatherIcons[this.props.weather] + ".svg"
        var colorScale = d3.scaleLinear().domain([this.props.minTemp, this.props.maxTemp]).range(["rgba(0, 0, 255, 0.5)", "rgba(255, 0, 0, 0.5)"])
        var rgb = colorScale(this.props.temp)

        return (
            <div className="WeatherWidget" style={{ backgroundColor: rgb }}>
                <h1 class="">{this.props.city}</h1>
                <img src={imgStr} height="50" />
                <h1>{this.props.temp}°C</h1>
            </div>
        )
    }
}

export default WeatherWidget;

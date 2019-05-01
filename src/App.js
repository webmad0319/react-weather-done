import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherWidget from './WeatherWidget';
import citiesFromJSON from './cities.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cities: citiesFromJSON,
      chosenContinent: undefined,
      citiesOfContinent: []
    }
  }

  chooseContinent(continentStr) {
    const citiesOfContinent = this.state.cities.filter(city => city.continent === continentStr)
    const temperatures = citiesOfContinent.map(city => city.temperature)

    this.setState({
      ...this.state,
      chooseContinent: continentStr,
      citiesOfContinent: citiesOfContinent,
      maxTemp: Math.max(...temperatures),
      minTemp: Math.min(...temperatures)
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Your chosen continent is {this.state.chooseContinent}</h1>
        <h2>{this.state.minTemp} / {this.state.maxTemp}</h2>

        <ul className="continent-displayer">
          <li onClick={() => this.chooseContinent("Europe")}>Europe</li>
          <li onClick={() => this.chooseContinent("America")}>America</li>
          <li onClick={() => this.chooseContinent("Africa")}>Africa</li>
          <li onClick={() => this.chooseContinent("Asia")}>Asia</li>
          <li onClick={() => this.chooseContinent("Oceania")}>Oceania</li>
        </ul>

        <div className="allCities">
          {
            this.state.citiesOfContinent.map(city => {
              return <WeatherWidget minTemp={this.state.minTemp} maxTemp={this.state.maxTemp} city={city.city} temp={city.temperature} weather={city.weather}></WeatherWidget>
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default App;

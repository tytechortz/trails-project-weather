import React, { Component } from 'react';
import WeatherData from './WeatherData/WeatherData';



const lat = '39';
const lon = '-104';
const API_Key = 'd177ecaf5436da5c14f410fb73b64b4d'

class App extends Component {
  constructor(){
    super();

    this.state = {
      weather: []
    }
  }

getWeather = async () => {

  try{
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${API_Key}`);
    const weatherJson = await weather.json();
    return weatherJson
  } catch(err){
    return err
  }
}

componentDidMount(){
  this.getWeather().then((data) => {
    console.log(data, 'this is data');
    this.setState({weather: data});

  }).catch((err) => {
    console.log(err);
  });
}
  render() {
    return (
      <div className="App">
        <WeatherData weather={this.state.weather} />
      </div>
    );
  }
}

export default App;

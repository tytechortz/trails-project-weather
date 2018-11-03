import React, { Component } from 'react';
import WeatherData from './WeatherData/WeatherData';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      weather: []
    }
  }

getWeather = async () => {

  try{
    const weather = await fetch('http://api.openweathermap.org/data/2.5/forecast?zip=80206,us&APPID=d177ecaf5436da5c14f410fb73b64b4d');
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

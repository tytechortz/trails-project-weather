import React from 'react';




const weatherData = (props) => {
    console.log(props)
    

    return (
        <div>
            <h3>Current Weather</h3>
            <ul>
                <p>Temp: {props.weather && props.weather.main && props.weather.main.temp}</p>
                <p>Humidity: {props.weather && props.weather.main && props.weather.main.humidity}</p>
                <p>High: {props.weather && props.weather.main && props.weather.main.temp_max}</p>
                <p>Low: {props.weather && props.weather.main && props.weather.main.temp_min}</p>
            </ul>
        </div>
    )
}

export default weatherData;
import React from 'react';

const WeatherInfo = props => {
  const data = props.data;

  const cityName = data.name;
  const temperature = (data.main.temp - 273.15).toFixed(0) + ` °C`;
  const pressure = data.main.pressure + ` hPa`;
  const rain = data.weather[0].description;
  const wind = data.wind.speed + ` m/s`;

  return (
    <div>
      {!data.name ? null :
        <h3>Weather Info for {cityName}</h3>
      }
      <ul>
        <li>pressure: {pressure}</li>
        <li>temperature: {temperature}</li>
        <li>rain: {rain}</li>
        <li>wind: {wind}</li>
      </ul>
    </div>
  )
}

export default WeatherInfo;
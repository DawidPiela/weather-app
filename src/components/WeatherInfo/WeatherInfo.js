import React from 'react';

const WeatherInfo = props => {
  const data = props.data;
  const cityName = data.city.name;

  // could count up numbers and take average but the results were distorted so I took the 0's element
  const temperature = (data.list[0].main.temp - 273.15).toFixed(2) + ` °C`;
  const pressure = data.list[0].main.pressure + ` hPa`;
  const rain = data.list[0].weather[0].description;
  const wind = data.list[0].wind.speed + ` m/s`;

  return (
    <div>
      <h3>Weather Info for {cityName}</h3>
      <p>
        pressure: {pressure}
      </p>
      <p>
        temperature: {temperature}
      </p>
      <p>
        rain: {rain}
      </p>
      <p>
        wind: {wind}
      </p>
    </div>
  )
}

export default WeatherInfo;
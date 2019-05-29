import React from 'react';

const WeatherInfo = props => {
  const data = props.data;
  let dateInfo = null;

  if (data.dt_txt) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date(data.dt_txt);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    dateInfo = (<li>date: {day} {month}</li>)
  }

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
        {dateInfo}
        <li>pressure: {pressure}</li>
        <li>temperature: {temperature}</li>
        <li>rain: {rain}</li>
        <li>wind: {wind}</li>
      </ul>
    </div>
  )
}

export default WeatherInfo;
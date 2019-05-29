import React, { useState, Fragment } from 'react';

import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';

export const SearchWeather = ({ weather, onFetchSearchWeather }) => {
  const [city, setCity] = useState('');

  const searchWeatherHandler = () => {
    onFetchSearchWeather(city);
  }

  const inputChangedHandler = event => {
    event.preventDefault();
    setCity(event.target.value)
  }

  return (
    <Fragment>
      <div>
        <input onChange={(event) => inputChangedHandler(event)} />
        <button
          onClick={searchWeatherHandler}>
          Search Weather
       </button>
      </div>
      {!weather ? null :
        <WeatherInfo data={weather} />
      }
    </Fragment >
  );
};
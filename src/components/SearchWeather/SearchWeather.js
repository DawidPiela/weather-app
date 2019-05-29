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
    <div className='search-container'>
      <div className='search-area'>
        <input
          type='text'
          className='search-input'
          onChange={(event) => inputChangedHandler(event)} />
        <button
          className='search-button'
          onClick={searchWeatherHandler}>
          Search Weather
       </button>
      </div>
      {!weather ? null :
        <WeatherInfo data={weather} />
      }
    </div>
  );
};
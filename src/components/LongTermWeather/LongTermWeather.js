import React, { useState, useEffect, Fragment } from 'react';

import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';

export const LongTermWeather = ({ weather, onFetchLongtermWeather }) => {
  const [coordinates, setCoordinates] = useState(null);
  let hour = null;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setCoordinates(coords);
      });
    }
  }, [setCoordinates]);

  useEffect(() => {
    if (coordinates) {
      onFetchLongtermWeather(coordinates);
    }
  }, [coordinates, onFetchLongtermWeather]);

  if (!weather) {
    return null;
  }

  const oneDay = (data) => {
    const date = new Date(data.dt_txt);
    const hours = date.getDay();
    if (hours === hour) {
      hour = hours;
      return false
    } else {
      hour = hours;
      return true;
    }
  };

  return (
    <div className='longterm-container'>
      <h3>Weather Info for {weather.city.name}</h3>
      {Object.values(weather.list).filter(oneDay).map((element) => (
        <WeatherInfo key={element.dt} data={element} />
      ))}
    </div>
  );
};
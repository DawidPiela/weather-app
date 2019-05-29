import React, { useState, useEffect, Fragment } from 'react';

import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';

export const LongTermWeather = ({ weather, onFetchLongtermWeather }) => {
  const [coordinates, setCoordinates] = useState(null);

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

  return (
    <Fragment>
      <h3>Weather Info for {weather.city.name}</h3>
      {Object.values(weather.list).slice(0, 5).map((element) => (
        <WeatherInfo key={element.dt} data={element} />
      ))}
    </Fragment>
  );
};
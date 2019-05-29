import React, { useState, useEffect, Fragment } from 'react';

import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import SmogInfo from '../../components/SmogInfo/SmogInfo';

export const CurrentWeather = ({ weather, smog, onFetchWeather, onFetchSmog }) => {
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
      onFetchWeather(coordinates);
      onFetchSmog(coordinates);
    }
  }, [coordinates, onFetchWeather, onFetchSmog]);

  if (!weather || !smog) {
    return null;
  }

  return (
    <Fragment>
      <WeatherInfo data={weather} />
      <SmogInfo data={smog} />
    </Fragment>
  );
};
import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axiosInstance';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo';
import SmogInfo from '../../components/SmogInfo/SmogInfo';

const CurrentWeather = ({ weather, smog, onFetchWeather }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watcher = navigator.geolocation.watchPosition(({ coords }) => {
        setCoordinates(coords);
      });

      return () => {
        navigator.geolocation.clearWatch(watcher);
      };
    }
  }, [setCoordinates]);

  useEffect(() => {
    if (coordinates) {
      onFetchWeather(coordinates);
    }
  }, [coordinates, onFetchWeather]);

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

const mapStateToProps = state => {
  return {
    weather: state.currentWeather.weather,
    smog: state.currentWeather.smog,
    error: state.currentWeather.error
  };
};

const mapDispatchToProps = dispatch => {
  console.log('4');
  return {
    onFetchWeather: coordinates =>
      dispatch(actions.onFetchWeather(coordinates))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather, axios);
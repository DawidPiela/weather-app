import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axiosInstance';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import SmogInfo from '../SmogInfo/SmogInfo';

const CurrentWeather = props => {
  const [currentState, setCurrentState] = useState({ userCoordinates: [] });

  useEffect(() => {
    if (navigator.geolocation) {
      const geoLoc = navigator.geolocation;
      geoLoc.watchPosition(setLocationData)
      if (typeof currentState.userCoordinates[0] === 'number') {
        props.onInitWeather(currentState.userCoordinates);
        window.localStorage.clear();
      }
    }
  });


  const setLocationData = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    setCurrentState({ userCoordinates: [lat, lon] });
  }

  const weatherData = props.weather;
  const smogData = props.smog;

  return (
    <>
      {!weatherData ? null :
        <WeatherInfo data={weatherData} />
      }
      {!smogData ? null :
        <SmogInfo data={smogData} />
      }
    </>
  );

};

const mapStateToProps = state => {
  return {
    weather: state.currentWeather.weather,
    smog: state.currentWeather.smog,
    error: state.currentWeather.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitWeather: (coordinates) => dispatch(actions.initCurrentWeather(coordinates))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather, axios);
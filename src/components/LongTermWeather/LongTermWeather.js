import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axiosInstance';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const LongTermWeather = props => {
  const [longtermState, setLongtermState] = useState({ userCoordinates: [] });

  useEffect(() => {
    if (navigator.geolocation) {
      const geoLoc = navigator.geolocation;
      geoLoc.watchPosition(setLocationData)
      if (typeof longtermState.userCoordinates[0] === 'number') {
        props.onInitWeather(longtermState.userCoordinates);
        window.localStorage.clear();
      }
    }
  });

  const setLocationData = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    setLongtermState({ userCoordinates: [lat, lon] });
  }

  const data = props.weather;

  return (
    <>
      {!data ? null :
        <>
          <h3>Weather Info for {data.city.name}</h3>
          {Object.values(data.list).slice(0, 5).map((element) => (
            <WeatherInfo key={element.dt} data={element} />
          ))}
        </>
      }
    </>
  );

};

const mapStateToProps = state => {
  return {
    weather: state.longtermWeather.weather,
    error: state.longtermWeather.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitWeather: (coordinates) => dispatch(actions.initLongtermWeather(coordinates))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LongTermWeather, axios);
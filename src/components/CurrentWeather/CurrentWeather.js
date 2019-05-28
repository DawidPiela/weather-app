import React, {useState} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axiosInstance';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const CurrentWeather = props => {
  const [currentState, setCurrentState] = useState({userCoordinates: []});

  const currentWeatherHandler = () => {
    props.onInitWeather(currentState.userCoordinates);
  }

  const coordinatesHandler = () => {
    //
    setCurrentState({userCoordinates: []})
  }

  const data = props.weather;

  return (
    <>
      {!data ? null :
        <WeatherInfo data={data} />
      }
    </>
  );

};

const mapStateToProps = state => {
  return {
    weather: state.currentWeather.weather,
    error: state.currentWeather.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitWeather: (coordinates) => dispatch(actions.initCurrentWeather(coordinates))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather, axios);
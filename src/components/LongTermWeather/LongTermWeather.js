import React, {useState} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axiosInstance';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const LongTermWeather = props => {
  const [longtermState, setLongtermState] = useState({userCoordinates: []});

  const longtermWeatherHandler = () => {
    props.onInitWeather(longtermState.userCoordinates);
  }

  const coordinatesHandler = () => {
    //
    setLongtermState({userCoordinates: []})
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
    weather: state.longtermWeather.weather,
    error: state.longtermtWeather.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitWeather: (coordinates) => dispatch(actions.initLongtermWeather(coordinates))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LongTermWeather, axios);
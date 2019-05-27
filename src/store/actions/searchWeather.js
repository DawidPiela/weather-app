import axios from '../../axiosInstance';

import * as actionTypes from './actionTypes';

export const setWeather = (weather) => {
  return {
    type: actionTypes.SET_SEARCHED_WEATHER,
    weather: weather
  }
}

export const fetchWeatherFailed = () => {
  return {
    type: actionTypes.FETCH_SEARCHED_WEATHER_FAILED
  }
}

export const initWeather = () => {
  return dispatch => {
    axios.get('data/2.5/forecast?id=524901&APPID=6628a1835fed01ea65e1905d03b57f12')
      .then(response => {
        // dispatch(setWeather(response.data));
      })
      .catch(error => {
        // dispatch(fetchWeatherFailed());
      })
  }
}
import axios from '../../axiosInstance';

import * as actionTypes from './actionTypes';

export const setCurrentWeather = (weather) => {
  return {
    type: actionTypes.SET_CURRENT_WEATHER,
    weather: weather
  }
}

export const fetchCurrentWeatherFailed = () => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_FAILED
  }
}

export const initCurrentWeather = (coordinates) => {
  console.log('api called', coordinates);
  return dispatch => {
    axios.get('' + coordinates + '&APPID=6628a1835fed01ea65e1905d03b57f12')
      .then (response => {
        dispatch(setCurrentWeather(response.data));
      })
      .catch(error => {
        dispatch(fetchCurrentWeatherFailed());
      })
  }
}
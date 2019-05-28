import axios from '../../axiosInstance';

import * as actionTypes from './actionTypes';

export const setLongtermWeather = (weather) => {
  return {
    type: actionTypes.SET_LONGTERM_WEATHER,
    weather: weather
  }
}

export const fetchLongtermWeatherFailed = () => {
  return {
    type: actionTypes.FETCH_LONGTERM_WEATHER_FAILED
  }
}

export const initLongtermWeather = (coordinates) => {
  console.log('api called', coordinates);
  return dispatch => {
    axios.get('' + coordinates + '&APPID=6628a1835fed01ea65e1905d03b57f12')
      .then (response => {
        dispatch(setLongtermWeather(response.data));
      })
      .catch(error => {
        dispatch(fetchLongtermWeatherFailed());
      })
  }
}
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
  return dispatch => {
    axios.get('data/2.5/forecast?lat=' + coordinates[0] + '&lon=' + coordinates[1] + '&APPID=6628a1835fed01ea65e1905d03b57f12')
      .then(response => {
        dispatch(setLongtermWeather(response.data));
      })
      .catch(error => {
        dispatch(fetchLongtermWeatherFailed());
      })
  }
}
import axios from '../../axiosInstance';

import * as actionTypes from './actionTypes';

export const setSearchWeather = (weather) => {
  return {
    type: actionTypes.SET_SEARCHED_WEATHER,
    weather: weather
  }
}

export const fetchSearchWeatherFailed = () => {
  return {
    type: actionTypes.FETCH_SEARCHED_WEATHER_FAILED
  }
}

export const initSearchWeather = (city) => {
  console.log('api called', city);
  return dispatch => {
    axios.get('data/2.5/forecast?q=' + city + '&APPID=6628a1835fed01ea65e1905d03b57f12')
      .then(response => {
        dispatch(setSearchWeather(response.data));
      })
      .catch(error => {
        dispatch(fetchSearchWeatherFailed());
      })
  }
}
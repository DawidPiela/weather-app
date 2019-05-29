import * as actionTypes from './actionTypes';

export const setSearchWeather = weather => ({
  type: actionTypes.SET_SEARCHED_WEATHER,
  payload: {
    weather
  }
})

export const fetchSearchWeatherFailed = () => ({
  type: actionTypes.FETCH_SEARCHED_WEATHER_FAILED
})
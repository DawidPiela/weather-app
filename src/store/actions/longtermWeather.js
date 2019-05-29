import * as actionTypes from './actionTypes';

export const setLongtermWeather = weather => ({
  type: actionTypes.SET_LONGTERM_WEATHER,
  payload: {
    weather
  }
})

export const fetchLongtermWeatherFailed = () => ({
  type: actionTypes.FETCH_LONGTERM_WEATHER_FAILED
})
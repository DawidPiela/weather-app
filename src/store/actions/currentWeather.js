import * as actionTypes from './actionTypes';

export const setCurrentWeather = weather => ({
  type: actionTypes.SET_CURRENT_WEATHER,
  payload: {
    weather
  }
})

export const fetchCurrentWeatherFailed = () => ({
  type: actionTypes.FETCH_CURRENT_WEATHER_FAILED
})

export const setCurrentSmog = smog => ({
  type: actionTypes.SET_CURRENT_SMOG,
  payload: {
    smog
  }
})

export const fetchCurrentSmogFailed = () => ({
  type: actionTypes.FETCH_CURRENT_SMOG_FAILED
})

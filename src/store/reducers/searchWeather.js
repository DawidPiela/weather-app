import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './updateObject';

const initialState = {
  weather: null,
  error: false
};

const setWeather = (state, action) => {
  return updateObject(state, {
    weather: action.weather
  });
};

const fetchWeatherFailed = (state, action) => {
  return updateObject(state, {
    error: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCHED_WEATHER:
      return setWeather(state, action);
    case actionTypes.FETCH_SEARCHED_WEATHER_FAILED:
      return fetchWeatherFailed(state, action);
    default: return state;
  }
};

export default reducer;
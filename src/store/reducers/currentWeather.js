import * as actionTypes from '../actions/actionTypes';
import {updateObject} from './updateObject';

const initialState = {
  weather: null,
  error: false
}

const setCurrentWeather = (state, action) => {
  return updateObject(state, {
    weather: action.weather
  });
};

const fetchCurrentWeatherFailed = (state, action) => {
  return updateObject(state, {
    error: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_WEATHER:
      return setCurrentWeather(state, action);
    case actionTypes.FETCH_CURRENT_WEATHER_FAILED:
      return fetchCurrentWeatherFailed(state, action);
    default: return state;
  }
};

export default reducer;
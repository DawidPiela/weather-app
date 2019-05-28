import * as actionTypes from '../actions/actionTypes';
import {updateObject} from './updateObject';

const initialState = {
  weather: null,
  error: false
}

const setLongtermWeather = (state, action) => {
  return updateObject(state, {
    weather: action.weather
  });
};

const fetchLongtermWeatherFailed = (state, action) => {
  return updateObject(state, {
    error: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LONGTERM_WEATHER:
      return setLongtermWeather(state, action);
    case actionTypes.FETCH_LONGTERM_WEATHER_FAILED:
      return fetchLongtermWeatherFailed(state, action);
    default: return state;
  }
};

export default reducer;
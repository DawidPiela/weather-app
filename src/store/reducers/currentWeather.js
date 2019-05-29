import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './updateObject';

const initialState = {
  weather: null,
  smog: null,
  coordinates: null,
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

const onFetchWeather = (state, action) => {
  return updateObject(state, {
    coordinates: action.coordinates
  })
}

const setCurrentSmog = (state, action) => {
  return updateObject(state, {
    smog: action.smog
  });
};

const fetchCurrentSmogFailed = (state, action) => {
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
    case actionTypes.ON_FETCH_WEATHER:
      return onFetchWeather(state, action);
    case actionTypes.SET_CURRENT_SMOG:
      return setCurrentSmog(state, action);
    case actionTypes.FETCH_CURRENT_SMOG_FAILED:
      return fetchCurrentSmogFailed(state, action);
    default: return state;
  }
};

export default reducer;
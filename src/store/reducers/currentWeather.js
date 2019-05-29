import * as actionTypes from '../actions/actionTypes';

const initialState = {
  weather: null,
  smog: null,
  coordinates: null,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_WEATHER:
      return { ...state, weather: action.payload.weather }
    case actionTypes.FETCH_CURRENT_WEATHER_FAILED:
      return { ...state, error: true }
    case actionTypes.ON_FETCH_WEATHER:
      return { ...state, coordinates: action.payload.coordinates }
    case actionTypes.SET_CURRENT_SMOG:
      return { ...state, smog: action.payload.smog }
    case actionTypes.FETCH_CURRENT_SMOG_FAILED:
      return { ...state, error: true }
    default: return state;
  }
};

export default reducer;
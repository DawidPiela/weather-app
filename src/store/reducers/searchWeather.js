import * as actionTypes from '../actions/actionTypes';

const initialState = {
  weather: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCHED_WEATHER:
      return { ...state, weather: action.payload.weather }
    case actionTypes.FETCH_SEARCHED_WEATHER_FAILED:
      return { ...state, error: true }
    default: return state;
  }
};

export default reducer;
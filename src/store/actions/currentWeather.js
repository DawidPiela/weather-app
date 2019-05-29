import axios from 'axios';

// import axiosInstance from '../../axiosInstance';
// import axiosInstance from '../../utils/openWeatherMapApi';

import * as actionTypes from './actionTypes';

export const setCurrentWeather = (weather) => {
  return {
    type: actionTypes.SET_CURRENT_WEATHER,
    weather: weather
  }
}

export const fetchCurrentWeatherFailed = () => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_FAILED
  }
}

export const setCurrentSmog = (smog) => {
  return {
    type: actionTypes.SET_CURRENT_SMOG,
    smog: smog
  }
}

export const fetchCurrentSmogFailed = () => {
  return {
    type: actionTypes.FETCH_CURRENT_SMOG_FAILED
  }
}

export const onFetchWeather = (coordinates) => {
  console.log('3');
  return dispatch => {
    dispatch(setCurrentWeather(response.data));
  }
  // return {
  //   type: actionTypes.ON_FETCH_WEATHER,
  //   coordinates: coordinates
  // }
}

export const initCurrentWeather = (coordinates) => {
  console.log('api called', coordinates);
  return dispatch => {
    // axiosInstance.get('data/2.5/weather', {
    //   params: {
    //     lat: coordinates.latitude,
    //     lon: coordinates.longitude,
    //     APPID: '6628a1835fed01ea65e1905d03b57f12'
    //   }
    // })
    //   .then(response => {
    //     dispatch(setCurrentWeather(response.data));
    //   })
    //   .catch(() => {
    //     dispatch(fetchCurrentWeatherFailed());
    //   })
    // axios.get('https://airapi.airly.eu/v2/measurements/nearest?lat=' + coordinates.latitude + '&lng=' + coordinates.longitude + '&apikey=PfrEDPGZPWlI18uC84zXH0S0FQ8vH41z')
    //   .then(response => {
    //     dispatch(setCurrentSmog(response.data))
    //   })
    //   .catch(error => {
    //     dispatch(fetchCurrentSmogFailed())
    //   })
  }
}

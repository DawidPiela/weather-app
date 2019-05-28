import axios from 'axios';

import axiosInstance from '../../axiosInstance';

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

export const initCurrentWeather = (coordinates) => {
  return dispatch => {
    const storage = window.localStorage;

    if (storage.getItem('lat') !== coordinates[0].toString() &&
      storage.getItem('lon') !== coordinates[1].toString()) {
      axiosInstance.get('data/2.5/weather?lat=' + coordinates[0] + '&lon=' + coordinates[1] + '&APPID=6628a1835fed01ea65e1905d03b57f12')
        .then(response => {
          storage.setItem('lat', coordinates[0]);
          storage.setItem('lon', coordinates[1]);
          dispatch(setCurrentWeather(response.data));
        })
        .catch(error => {
          dispatch(fetchCurrentWeatherFailed());
        })
      if (storage.getItem('smog') !== 'yes') {
        axios.get('https://airapi.airly.eu/v2/measurements/nearest?lat=' + coordinates[0] + '&lng=' + coordinates[1] + '&apikey=PfrEDPGZPWlI18uC84zXH0S0FQ8vH41z')
          .then(response => {
            storage.setItem('smog', 'yes');
            dispatch(setCurrentSmog(response.data))
          })
          .catch(error => {
            dispatch(fetchCurrentSmogFailed())
          })
      }
    }
  }
}

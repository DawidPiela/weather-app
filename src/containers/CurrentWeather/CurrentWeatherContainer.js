import { connect } from 'react-redux';

import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import * as actions from '../../store/actions/index';
import openWeatherInstance from '../../utils/openWeatherMapApi';
import airlyInstance from '../../utils/airlyApi';

const mapStateToProps = ({ currentWeather: { weather, smog, error } }) => ({
  weather,
  smog,
  error
});

const mapDispatchToProps = dispatch => ({
  onFetchWeather: coordinates =>
    openWeatherInstance
      .get('data/2.5/weather', {
        params: {
          lat: coordinates.latitude,
          lon: coordinates.longitude,
          APPID: '6628a1835fed01ea65e1905d03b57f12'
        }
      })
      .then(response => {
        console.log('1');
        dispatch(actions.setCurrentWeather(response.data));
      })
      .catch(() => {
        console.log('2');
        dispatch(actions.fetchCurrentWeatherFailed());
      }),
  onFetchSmog: coordinates =>
    airlyInstance
      .get('measurements/nearest', {
        params: {
          lat: coordinates.latitude,
          lng: coordinates.longitude,
          apikey: 'PfrEDPGZPWlI18uC84zXH0S0FQ8vH41z'
        }
      })
      .then(response => {
        dispatch(actions.setCurrentSmog(response.data));
      })
      .catch(error => {
        dispatch(actions.fetchCurrentSmogFailed());
      })
});

export const CurrentWeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather);
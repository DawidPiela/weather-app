import { connect } from 'react-redux';

import { CurrentWeather } from '../../components/CurrentWeather/CurrentWeather';
import * as actions from '../../store/actions/index';
import fetchWeatherData from '../../api/requests/fetchCurrentWeather';
import fetchSmogData from '../../api/requests/fetchSmog';

const mapStateToProps = ({ currentWeather: { weather, smog, error } }) => ({
  weather,
  smog,
  error
});

const mapDispatchToProps = dispatch => ({
  onFetchWeather: coordinates =>
    fetchWeatherData(coordinates)
      .then(response => {
        dispatch(actions.setCurrentWeather(response));
      })
      .catch(() => {
        dispatch(actions.fetchCurrentWeatherFailed());
      })
  ,
  onFetchSmog: coordinates =>
    fetchSmogData(coordinates)
      .then(response => {
        dispatch(actions.setCurrentSmog(response));
      })
      .catch((error) => {
        dispatch(actions.fetchCurrentWeatherFailed());
      })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather);
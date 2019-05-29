import { connect } from 'react-redux';

import { LongTermWeather } from '../../components/LongTermWeather/LongTermWeather';
import * as actions from '../../store/actions/index';
import fetchForecastData from '../../api/requests/fetchForecastData';

const mapStateToProps = ({ longtermWeather: { weather, error } }) => ({
  weather,
  error
});

const mapDispatchToProps = dispatch => ({
  onFetchLongtermWeather: coordinates =>
  fetchForecastData(coordinates)
      .then(response => {
        dispatch(actions.setLongtermWeather(response));
      })
      .catch(() => {
        dispatch(actions.fetchLongtermWeatherFailed());
      })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LongTermWeather);
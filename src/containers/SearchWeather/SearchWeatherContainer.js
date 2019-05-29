import { connect } from 'react-redux';

import { SearchWeather } from '../../components/SearchWeather/SearchWeather';
import * as actions from '../../store/actions/index';
import fetchSearchedWeather from '../../api/requests/fetchSearchedWeather';

const mapStateToProps = ({ searchWeather: { weather, error } }) => ({
  weather,
  error
});

const mapDispatchToProps = dispatch => ({
  onFetchSearchWeather: city =>
    fetchSearchedWeather(city)
      .then(response => {
        dispatch(actions.setSearchWeather(response));
      })
      .catch(() => {
        dispatch(actions.fetchSearchWeatherFailed());
      })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWeather);
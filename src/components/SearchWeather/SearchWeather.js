import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axiosInstance';

const SearchWeather = props => {
  const [setWeather] = useState(false);

  useEffect(() => {
    props.onInitWeather();
  }, []);

  return (
    <div>
      
    </div>
  );

};
const mapStateToProps = state => {
  return {
    weather: state.searchWeather.weather,
    error: state.searchWeather.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitWeather: () => dispatch(actions.initWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather, axios);
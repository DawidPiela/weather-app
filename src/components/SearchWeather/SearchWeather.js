import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import axios from '../../axiosInstance';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const SearchWeather = props => {
  const [searchState, setSearchState] = useState({ userInput: '' });

  const searchWeatherHandler = () => {
    props.onInitWeather(searchState.userInput);
  }

  const inputChangedHandler = event => {
    event.preventDefault();
    setSearchState({ userInput: event.target.value })
  }

  const data = props.weather;

  return (
    <>
      <div>
        <input onChange={(event) => inputChangedHandler(event)} />
        <button
          onClick={searchWeatherHandler}>
          Search Weather
      </button>
      </div>
      {!data ? null :
        <WeatherInfo data={data} />
      }
    </>
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
    onInitWeather: (city) => dispatch(actions.initWeather(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather, axios);
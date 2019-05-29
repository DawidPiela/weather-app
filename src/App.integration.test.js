import React from "react";
import { render, fireEvent, act, waitForElement } from "react-testing-library";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import searchReducer from './store/reducers/searchWeather';
import currentReducer from './store/reducers/currentWeather';
import longtermReducer from './store/reducers/longtermWeather';
import App from "./App";

const rootReducer = combineReducers({
  searchWeather: searchReducer,
  currentWeather: currentReducer,
  longtermWeather: longtermReducer
})

const store = createStore(rootReducer);

describe("WeatherApp integration test", () => {
  const weather = {
    coord: { lon: 18.46, lat: 50.04 },
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
    ],
    base: "stations",
    main: {
      temp: 287.34,
      pressure: 1018,
      humidity: 67,
      temp_min: 282.59,
      temp_max: 289.26
    },
    visibility: 10000,
    wind: { speed: 6.7, deg: 20 },
    clouds: { all: 75 },
    dt: 1559142984,
    sys: {
      type: 1,
      id: 6842,
      message: 0.0067,
      country: "PL",
      sunrise: 1559097885,
      sunset: 1559155357
    },
    timezone: 7200,
    id: 7531104,
    name: "Radlin",
    cod: 200
  };

  const smog = {
    current: {
      values: [{ name: "PM1", value: "6.13" }]
    }
  };

  const mock = new AxiosMockAdapter(axios);

  mock.onGet('data/2.5/weather').reply(200, weather);
  mock.onGet('measurements/nearest').reply(200, smog);

  const mockCorrds = {
    latitude: 10,
    longiteude: 10
  };

  const mockGeolocation = {
    getCurrentPosition: jest.fn(callback => callback({ coords: mockCorrds })),
    watchPosition: jest.fn()
  };

  global.navigator.geolocation = mockGeolocation;

  it("allows to navigate through application", async () => {
    const { container, getByText } = render(<Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>);

    expect(container.querySelectorAll('a').length).toEqual(3);

    // Current weather and smog
    await waitForElement(() => getByText("pressure: 1018 hPa"));

    // Forecast
    fireEvent.click(getByText('Current weather forecast'));

    // Search
    fireEvent.click(getByText('Search for the weather'));

  });
});
import React from "react";

import { render } from "react-testing-library";

import { CurrentWeather } from "./CurrentWeather";

describe("CurrentWeather component", () => {
  const mockCorrds = {
    latitude: 10,
    longiteude: 10
  };

  const mockGeolocation = {
    getCurrentPosition: jest.fn(callback => callback({ coords: mockCorrds })),
    watchPosition: jest.fn()
  };

  global.navigator.geolocation = mockGeolocation;

  it("fires proper actions", async () => {
    const onFetchWeather = jest.fn();
    const onFetchSmog = jest.fn();

    const { container } = render(
      <CurrentWeather
        weather={null}
        smog={null}
        onFetchWeather={onFetchWeather}
        onFetchSmog={onFetchSmog}
      />
    );

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    expect(onFetchWeather).toHaveBeenCalledWith(mockCorrds);
    expect(onFetchSmog).toHaveBeenCalledWith(mockCorrds);
  });

  it("renders proper data", async () => {
    const onFetchWeather = jest.fn();
    const onFetchSmog = jest.fn();

    const weather = {
      coord: { lon: 18.51, lat: 50.05 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      base: "stations",
      main: {
        temp: 287.01,
        pressure: 1018,
        humidity: 67,
        temp_min: 283.15,
        temp_max: 288.71
      },
      visibility: 10000,
      wind: { speed: 4.1, deg: 30 },
      clouds: { all: 75 },
      dt: 1559149903,
      sys: {
        type: 1,
        id: 6842,
        message: 0.0079,
        country: "PL",
        sunrise: 1559097870,
        sunset: 1559155348
      },
      timezone: 7200,
      id: 3091031,
      name: "Niedobczyce",
      cod: 200
    };

    const smog = {
      current: {
        values: [
          { name: "PM1", value: 6.01 },
          { name: "PM25", value: 8.41 },
          { name: "PM10", value: 11.48 },
          { name: "PRESSURE", value: 1020.64 },
          { name: "HUMIDITY", value: 81.1 },
          { name: "TEMPERATURE", value: 12.58 }
        ]
      }
    };

    const { getByText } = render(
      <CurrentWeather
        weather={weather}
        smog={smog}
        onFetchWeather={onFetchWeather}
        onFetchSmog={onFetchSmog}
      />
    );

    // Weather info
    expect(getByText("pressure: 1018 hPa")).toBeTruthy();
    expect(getByText("temperature: 14 °C")).toBeTruthy();
    expect(getByText("rain: broken clouds")).toBeTruthy();
    expect(getByText("wind: 4.1 m/s")).toBeTruthy();

    // Smog info
    expect(getByText("PM1: 6.01")).toBeTruthy();
    expect(getByText("PM25: 8.41")).toBeTruthy();
    expect(getByText("PM10: 11.48")).toBeTruthy();
  });
});

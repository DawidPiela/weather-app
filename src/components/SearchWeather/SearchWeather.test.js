import React from "react";

import { render, fireEvent } from "react-testing-library";

import { SearchWeather } from "./SearchWeather";

describe("SearchWeather component", () => {

  it("fires proper actions", async () => {
    const onFetchSearchWeather = jest.fn();

    const { container } = render(
      <SearchWeather
        weather={null}
        onFetchSearchWeather={onFetchSearchWeather}
      />
    );

  });

  it("renders proper data", async () => {
    const onFetchSearchWeather = jest.fn();

    const weather = {
      coord: { lon: 19.02, lat: 50.26 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      base: "stations",
      main: {
        temp: 286.52,
        pressure: 1019,
        humidity: 62,
        temp_min: 285.15,
        temp_max: 287.59
      },
      visibility: 10000,
      wind: { speed: 4.1, deg: 340 },
      clouds: { all: 75 },
      dt: 1559153908,
      timezone: 7200,
      id: 3096472,
      name: "Katowice",
      cod: 200
    };

    const { getByText } = render(
      <SearchWeather
        weather={weather}
        onFetchSearchWeather={onFetchSearchWeather}
      />
    );

    // Weather info
    expect(getByText("Weather Info for Katowice")).toBeTruthy();
    expect(getByText("pressure: 1019 hPa")).toBeTruthy();
    expect(getByText("temperature: 13 °C")).toBeTruthy();
    expect(getByText("rain: broken clouds")).toBeTruthy();
    expect(getByText("wind: 4.1 m/s")).toBeTruthy();

  });
});

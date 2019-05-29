import React from "react";

import { render } from "react-testing-library";

import WeatherInfo from "./WeatherInfo";

describe("WeatherInfo component", () => {
  it("renders proper data", async () => {
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

    const { container, getByText } = render(
      <WeatherInfo
        data={weather}
      />
    );

    // DOM elements
    expect(container.querySelector(".weather-info__header").textContent).toContain("Weather Info for Niedobczyce");
    expect(container.querySelectorAll(".weather-info__list-item").length).toEqual(4);

    // Weather info
    expect(getByText("pressure: 1018 hPa")).toBeTruthy();
    expect(getByText("temperature: 14 °C")).toBeTruthy();
    expect(getByText("rain: broken clouds")).toBeTruthy();
    expect(getByText("wind: 4.1 m/s")).toBeTruthy();
  });
});

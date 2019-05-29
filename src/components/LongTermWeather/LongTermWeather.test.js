import React from "react";

import { render } from "react-testing-library";

import { LongTermWeather } from "./LongTermWeather";

describe("LongTermWeather component", () => {
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
    const onFetchLongtermWeather = jest.fn();

    const { container } = render(
      <LongTermWeather
        weather={null}
        onFetchLongtermWeather={onFetchLongtermWeather}
      />
    );

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    expect(onFetchLongtermWeather).toHaveBeenCalledWith(mockCorrds);
  });

  it("renders proper data", async () => {
    const onFetchLongtermWeather = jest.fn();

    const weather = {
      city: {
        name: "Niedobczyce"
      },
      list: [{
        "dt": 1559163600,
        "main": {
          "temp": 283.88,
          "temp_min": 283.88,
          "temp_max": 284.217,
          "pressure": 1020.71,
          "sea_level": 1020.71,
          "grnd_level": 990.26,
          "humidity": 75,
          "temp_kf": -0.34
        },
        "weather": [{
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }],
        "clouds":
          { "all": 61 },
        "wind": { "speed": 3.57, "deg": 26.694 },
        "sys": { "pod": "n" },
        "dt_txt": "2019-05-29 21:00:00"
      }
      ]
    }

    const { getByText } = render(
      <LongTermWeather
        weather={weather}
        onFetchLongtermWeather={onFetchLongtermWeather}
      />
    );

    // Weather info
    expect(getByText("Weather Info for Niedobczyce")).toBeTruthy();
    expect(getByText("Date: 29 May")).toBeTruthy();
    expect(getByText("pressure: 1020.71 hPa")).toBeTruthy();
    expect(getByText("temperature: 11 °C")).toBeTruthy();
    expect(getByText("rain: broken clouds")).toBeTruthy();
    expect(getByText("wind: 3.57 m/s")).toBeTruthy();

  });
});

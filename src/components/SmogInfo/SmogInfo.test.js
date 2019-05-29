import React from "react";

import { render } from "react-testing-library";

import SmogInfo from "./SmogInfo";

describe("SmogInfo component", () => {
  it("renders proper data", async () => {
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

    const { container, getByText } = render(
      <SmogInfo
        data={smog}
      />
    );

    // DOM elements
    expect(container.querySelectorAll(".smog-info__list-item").length).toEqual(3);

    // Smog info
    expect(getByText("PM1: 6.01")).toBeTruthy();
    expect(getByText("PM25: 8.41")).toBeTruthy();
    expect(getByText("PM10: 11.48")).toBeTruthy();
  });
});

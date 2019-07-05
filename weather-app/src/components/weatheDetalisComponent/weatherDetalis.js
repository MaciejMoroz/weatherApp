import React from "react";
import windArrow from "../../img/windArrow.png";
import airPressure from "../../img/airPressure.png";

import "./weatherDetalis.scss";

const weatherDetalis = ({ weather }) => {
  return (
    <div>
      <div className="weatherIcon">
        <img
          src={`http://openweathermap.org/img/wn/${
            weather.weather[0].icon
          }@2x.png`}
          alt="sky Icon"
        />
        <div>
          <p>{weather.weather[0].description} </p>
          {weather.weather[0].main === "Rain" ? (
            <p>{weather.rain["3h"]} mm</p>
          ) : null}
        </div>
      </div>
      <div className="windSpeed">
        <img
          style={{ transform: `rotate(${weather.wind.deg - 225}deg)` }}
          src={windArrow}
          alt="wind direction"
        />
        <p>{weather.wind.speed} m/s</p>
      </div>
      <div className="airPressure">
        <img src={airPressure} alt="air Preasure" />
        <p>{weather.main.pressure} hPs</p>
      </div>
    </div>
  );
};

export default weatherDetalis;

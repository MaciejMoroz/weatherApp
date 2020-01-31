import React from "react";
import windArrow from "../../img/windArrow.png";
import airPressure from "../../img/airPressure.png";
import WeatherIcon from "../common/weatherIcons"

const weatherDetalis = ({ weather }) => {
  return (
    <div>
      <div className="weatherIcon">
        <WeatherIcon iconType={weather.weather[0].icon} iconId={weather.weather[0].id}></WeatherIcon>
        <div>
          <p>{weather.weather[0].description}</p>
          {weather.weather[0].main === "Rain" ? (
            typeof weather['rain'] !== undefined ? null : <p>{weather.rain["3h"]} mm</p>
          ) : null
          }
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

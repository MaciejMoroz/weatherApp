import React from "react";
import airPressure from "../../../img/airPressure.png";
import windArrow from "../../../img/windArrow.png";

import ArrowIcon from "../../common/arrow";
import WeatherIcon from "../../common/weatherIcons"


const ForecastItem = ({ main, dt, weather, wind }) => {
  return (
    <div className="forecastItem">

      <div className="data">
        {new Date(dt * 1000).toLocaleString(["pl-PL"], {
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        })}
      </div>
      <div className="tempBox--forecast">
        <p>{(main.temp - 272.15).toFixed(1) + String.fromCharCode(176)}</p>
        <div className="minMaxTemp--forecast">
          <span>
            <ArrowIcon arrowColor="#000" arrowType="up"></ArrowIcon>
            {(main.temp_max - 272.15).toFixed(1) + String.fromCharCode(176)}
            <ArrowIcon arrowColor="#000" arrowType="down"></ArrowIcon>
            {(main.temp_min - 272.15).toFixed(1) + String.fromCharCode(176)}
          </span>
        </div>
      </div>
      <div className="weatherIcon--forecast">
        <WeatherIcon iconType={weather[0].icon} iconId={weather[0].id}></WeatherIcon>
        <span>{weather[0].description} </span>
      </div>
      <div className="windSpeed--forecast">
        <img
          style={{
            transform: `rotate(${wind.deg - 225}deg)`
          }}
          src={windArrow}
          alt="wind direction"
        />
        <span>{wind.speed} m/s</span>
      </div>
      <div className="airPressure--forecast">
        <img src={airPressure} alt="air Preasure" />
        <span>{main.pressure.toFixed(0)} hPs</span>
      </div>
    </div >
  );
};

export default ForecastItem;

import React from "react";
import airPressure from "../../../img/airPressure.png";
import windArrow from "../../../img/windArrow.png";
import arrowUp from "../../../img/arrow_up.png";
import arrowDown from "../../../img/arrow_down.png";
import "./forecastItem.scss";

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
            <img src={arrowUp} alt="max temp icon" />{" "}
            {(main.temp_max - 272.15).toFixed(1) + String.fromCharCode(176)}
            <img src={arrowDown} alt="min temp icon" />{" "}
            {(main.temp_min - 272.15).toFixed(1) + String.fromCharCode(176)}
          </span>
        </div>
      </div>
      <div className="weatherIcon--forecast">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="sky Icon"
        />
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
    </div>
  );
};

export default ForecastItem;

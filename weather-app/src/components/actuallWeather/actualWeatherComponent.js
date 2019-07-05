import React from "react";
import "./actuallWeather.scss";

import Sun from "../sunComponent/sun";
import Temp from "../tempComponent/tempComponent";

import WeatherDetalis from "../weatheDetalisComponent/weatherDetalis";

const ActuallWeather = ({ weather }) => {
  console.log();

  return (
    <div className="component actuallWeather">
      <div className="wrapper">
        <h4 className="cityName">{weather.name}</h4>
        <Sun weather={weather} />
        <div className="actual-cont">
          <div className="left-coll">
            <Temp weather={weather} />
          </div>
          <div className="right-coll">
            <WeatherDetalis weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActuallWeather;

/* <div>


</div>
<h4>{weather.name}</h4>
<div>

<p>
  Temperatura minimalna:
  {" " +
    (weather.main.temp_min - 272.15).toFixed(1) +
    " " +
    String.fromCharCode(8451)}
</p>
<p>
  Temperatura maksymalna:
  {" " +
    (weather.main.temp_max - 272.15).toFixed(1) +
    " " +
    String.fromCharCode(8451)}
</p>
<p>Ciśnienie: {weather.main.pressure} hPa</p>
<p>Wilgotność: {weather.main.humidity} %</p>
<p>Ciśnienie: {weather.main.pressure} hPa</p>
</div> */

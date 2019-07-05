import React, { useEffect } from "react";
import "./actuallWeather.scss";

import Sun from "../sunComponent/sun";
import Temp from "../tempComponent/tempComponent";

import WeatherDetalis from "../weatheDetalisComponent/weatherDetalis";
let isFetched = false;

const ActuallWeather = ({
  location,
  isLoading,
  isError,
  weather,
  fetchWeatherWithRedux
}) => {
  useEffect(() => {
    if (
      location.latitude !== 0 &&
      location.longitude !== 0 &&
      isFetched === false
    ) {
      console.log(location.latitude);

      isFetched = true;
      fetchWeatherWithRedux(location.latitude, location.longitude);
    }
  });
  if (isError) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

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

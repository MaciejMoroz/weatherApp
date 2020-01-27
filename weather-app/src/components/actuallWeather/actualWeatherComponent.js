import React, { useEffect } from "react";

import Sun from "../sunComponent/sun";
import Temp from "../tempComponent/tempComponent";

import WeatherDetalis from "../weatheDetalisComponent/weatherDetalis";


const ActuallWeather = ({
  location,
  isLoading,
  isError,
  weather,
  fetchWeatherWithRedux
}) => {
  useEffect(() => {
    fetchWeatherWithRedux(location.latitude, location.longitude);
    // eslint-disable-next-line
  }, [location]);
  if (isError) {
    return <h2 className="cos">Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <h2 className="cos">Loading...</h2>;
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

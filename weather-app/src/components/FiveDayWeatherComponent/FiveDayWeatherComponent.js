import React, { useEffect } from "react";
import "./fiveDayWeather.scss";

let isFetched = false;

const ActuallWeather = ({
  location,
  isLoadingD5,
  isErrorD5,
  d5Weather,
  fetch_5day_WeatherWithRedux
}) => {
  useEffect(() => {
    if (
      location.latitude !== 0 &&
      location.longitude !== 0 &&
      isFetched === false
    ) {
      console.log(location.latitude);

      isFetched = true;
      fetch_5day_WeatherWithRedux(location.latitude, location.longitude);
    }
  });
  if (isErrorD5) {
    return <h2>Error while loading... :(</h2>;
  }

  if (isLoadingD5) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="component actuallWeather">
      <div className="wrapper">
        <p className="cos">dziala</p>
      </div>
    </div>
  );
};

export default ActuallWeather;

import React, { useEffect } from "react";

import ActuallWeather from "../actuallWeather/actualWeatherComponent";
import Day5Weather from "../5dayWeatherComponent/5dayWeather";
import store from "../../store/store";

let isFetched = false;

const HomePage = ({
  location,
  getLocation,
  weather,
  d5Weather,
  isLoading,
  isError,
  fetchWeatherWithRedux,
  fetch_5day_WeatherWithRedux
}) => {
  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) {
      getLocation();
    }
    if (
      location.latitude !== 0 &&
      location.longitude !== 0 &&
      isFetched === false
    ) {
      isFetched = true;
      fetch_5day_WeatherWithRedux(location.latitude, location.longitude);

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
    <div>
      <ActuallWeather weather={weather} />
      <Day5Weather />
      {console.log(d5Weather)}}
    </div>
  );
};

export default HomePage;

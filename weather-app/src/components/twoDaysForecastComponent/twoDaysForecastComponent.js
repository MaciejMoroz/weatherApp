import React, { useEffect } from "react";
import "./twoDaysForecast.scss";
import ForecastList from "../ForecastListComponent/ForecastList";


let isFetched = false;

const ActuallWeather = ({
  location,
  d5_isError,
  d5_isLoading,
  d5_weather,
  fetch_5day_WeatherWithRedux
}) => {
  useEffect(() => {
    if (
      location.latitude !== 0 &&
      location.longitude !== 0 &&
      isFetched === false
    ) {

      isFetched = true;
      fetch_5day_WeatherWithRedux(location.latitude, location.longitude);
    }
  });
  if (d5_isError) {
    return <h2 className="cos">Error while loading... :(</h2>;
  }

  if (d5_isLoading) {
    return <h2 className="cos">Loading...</h2>;
  }

  return (
    <div className="component twoDay">
      <div className="wrapper">
        <ForecastList forecasWweatherList={d5_weather.list} cityName={d5_weather.city.name} />
      </div>
    </div>
  );
};

export default ActuallWeather;

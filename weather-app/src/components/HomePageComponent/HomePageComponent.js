import React, { useEffect } from "react";
// import store from "../../store/store";
let isFetched = false;
const HomePage = ({
  location,
  getLocation,
  weather,
  isLoading,
  isError,
  getWeather,
  fetchWeatherWithRedux
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
      fetchWeatherWithRedux(location.latitude, location.longitude);
    }
  });

  return (
    <div>
      <div>
        Latitude: <span>{location.latitude}</span>
      </div>
      <div>
        Longitude: <span>{location.longitude}</span>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useEffect } from "react";

import ActuallWeatherContainer from "../../container/actuallWeatherContainer";
import TwoDayContainer from "../../container/twoDayForecastContainer";

const HomePage = ({ location, getLocation }) => {
  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) {
      getLocation();
    }
  });
  return (
    <div>
      <ActuallWeatherContainer location={location} />
      <TwoDayContainer location={location} />
    </div>
  );
};

export default HomePage;

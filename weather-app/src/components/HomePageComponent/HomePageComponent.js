import React, { useEffect } from "react";

import ActuallWeatherContainer from "../../container/actuallWeatherContainer";
import FiveDayContainer from "../../container/FiveDayWeatherContainer";

const HomePage = ({ location, getLocation }) => {
  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) {
      getLocation();
    }
  });
  return (
    <div>
      <ActuallWeatherContainer location={location} />
      <FiveDayContainer location={location} />
    </div>
  );
};

export default HomePage;

import React from "react";


import ActuallWeatherContainer from "../../container/actuallWeatherContainer";
import TwoDayContainer from "../../container/twoDayForecastContainer";
import TopBarContainer from "../../container/topBarContainer"


const HomePage = ({ location, getLocation, setLocation }) => {

  if (location.latitude === undefined && location.longitude === undefined) {
    return <p>Please allow geolocation</p>
  } else {

    return (
      <div>
        <TopBarContainer></TopBarContainer>
        <ActuallWeatherContainer location={location} />
        <TwoDayContainer location={location} />
      </div>
    );
  }
};

export default HomePage;

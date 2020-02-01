import React, { useState, useEffect } from "react";


import ActuallWeatherContainer from "../../container/actuallWeatherContainer";
import TwoDayContainer from "../../container/twoDayForecastContainer";
import TopBarContainer from "../../container/topBarContainer"


const HomePage = ({ location, getLocation, setLocation }) => {
  // const [coords, setCoords] = useState([]);
  useEffect(() => {
    if (location) {
      let coords = {
        coords: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      }
      localStorage.setItem('coords', JSON.stringify(coords));
    }
  }, [location]);

  return (
    <div>

      <TopBarContainer></TopBarContainer>
      <ActuallWeatherContainer location={location} />
      <TwoDayContainer location={location} />

    </div>
  );
  // }
};

export default HomePage;

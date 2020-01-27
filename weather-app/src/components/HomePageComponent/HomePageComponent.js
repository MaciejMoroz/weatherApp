import React, { useState } from "react";

import ActuallWeatherContainer from "../../container/actuallWeatherContainer";
import TwoDayContainer from "../../container/twoDayForecastContainer";
import citesList from "../../city.list.json"


const HomePage = ({ location, getLocation, setLocation }) => {

  const [cityState, setCity] = useState([]);

  let handleChange = (value) => {
    // eslint-disable-next-line
    citesList.map(city => {
      if (city.name.toLowerCase() === value.toLowerCase()) {
        return setCity(city)
      }

    })
  }
  let handleClick = () => {
    setLocation(cityState.coord.lat, cityState.coord.lon);

  }


  if (location.latitude === undefined && location.longitude === undefined) {
    return <p>Please allow geolocation</p>
  } else {

    return (
      <div>
        <button onClick={() => getLocation()}>by geo location</button>
        {console.log(location)
        }
        {console.log(cityState)}
        <input onChange={(e) => handleChange(e.target.value)}></input>
        <button onClick={() => handleClick()}>serch</button>

        <ActuallWeatherContainer location={location} />
        <TwoDayContainer location={location} />
      </div>
    );
  }
};

export default HomePage;

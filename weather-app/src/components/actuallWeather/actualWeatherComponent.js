import React, { useEffect, useState } from "react";

import Sun from "../sunComponent/sun";
import Temp from "../tempComponent/tempComponent";

import WeatherDetalis from "../weatheDetalisComponent/weatherDetalis";

import loading from "../../img/loading.gif"
import Clear from "../../img/wallpapers/Clear.jpg"
import Rain from "../../img/wallpapers/Rain.jpg"
import Thunderstorm from "../../img/wallpapers/Thunderstorm.jpg"
import Snow from "../../img/wallpapers/Snow.jpg"
import CloudsFew from "../../img/wallpapers/CloudsFew.jpg"
import CloudsScattered from "../../img/wallpapers/CloudsScattered.jpg"
import CloudsBrokenclouds from "../../img/wallpapers/CloudsBrokenclouds.jpg"
import CloudsOvercast from "../../img/wallpapers/CloudsOvercast.jpg"


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

  const [img, setImg] = useState({ main: Clear, id: '800' })

  useEffect(() => {
    if (!isLoading) {
      setImg({ main: weather.weather[0].main, id: weather.weather[0].id })
    }
    // eslint-disable-next-line
  }, [isLoading, location])

  const backgroundTypes = [
    {
      'name': "Clear",
      "src": Clear
    },
    {
      'name': "Thunderstorm",
      "src": Thunderstorm
    },
    {
      'name': "Drizzle",
      "src": 'Drizzle'
    },
    {
      'name': "Snow",
      "src": Snow
    },
    {
      'name': "Fog",
      "src": 'Fog'
    },
  ]


  if (isError) {
    return <h2 className="loading loading_errror">Error while loading... :(</h2>;
  }

  if (isLoading) {
    return <img className="loading" src={loading} alt="loading gif" />;
  }

  let backgroundImg;
  if (img.id === 801) {
    backgroundImg = {
      backgroundImage: `url(${CloudsFew})`
    }
  } else if (img.id === 802) {
    backgroundImg = {
      backgroundImage: `url(${CloudsScattered})`
    }
  } else if (img.id === 803) {
    backgroundImg = {
      backgroundImage: `url(${CloudsBrokenclouds})`
    }
  } else if (img.id === 804) {
    backgroundImg = {
      backgroundImage: `url(${CloudsOvercast})`
    }
  } else if (img.main === 'Rain') {
    backgroundImg = {
      backgroundImage: `url(${Rain})`
    }
  } else {
    backgroundTypes.forEach(e => {
      if (e.name === img.main) {
        backgroundImg = {
          backgroundImage: `url(${e.src})`
        }
      }
    });
  }


  return (
    <div className={"component actuallWeather"} style={backgroundImg}  >
      <div className="wrapper" >
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
    </div >
  );
};

export default ActuallWeather;




import React from 'react';
import 'swiper/css/swiper.css';

import Swiper from 'react-id-swiper';
import ForecastItem from "./ForecastItemComponent/forecastItem";

const ForecastList = ({ forecasWweatherList, cityName }) => {

  let forecasWweather__next48h =
    forecasWweatherList.filter(forecastItem =>
      forecastItem.dt < ((forecasWweatherList[0].dt + 49 * 60 * 60))
    );

  const params = {
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 3,

      },
      500: {
        slidesPerView: 4,

      },
      650: {
        slidesPerView: 5,
      },
      786: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 7,
      }
    }
  }

  return (
    <>
      <h4 className="bold">Next 48hrs in {cityName}</h4>
      <div className="forcastList" >
        <Swiper {...params} rebuildOnUpdate>
          {forecasWweather__next48h.map((forecastItem, index) => (
            <div key={index}>
              <ForecastItem  {...forecastItem} />
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ForecastList;

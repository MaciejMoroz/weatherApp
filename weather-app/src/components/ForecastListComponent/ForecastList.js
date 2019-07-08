import React from "react";
import "./forecastList.scss";

import ForecastItem from "../ForecastItemComponent/forecastItem";

const ForecastList = ({ forecasWweatherList }) => {
  return (
    <div className="forcastList">
      {forecasWweatherList.map((forecastItem, index) => (
        <ForecastItem key={index} {...forecastItem} className="forecastItem" />
      ))}
    </div>
  );
};

export default ForecastList;

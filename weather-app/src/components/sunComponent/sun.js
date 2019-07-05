import React from "react";
import "./sun.scss";

import sunIcon from "../../img/sun.png";
import arrowUp from "../../img/arrow_up.png";
import arrowDown from "../../img/arrow_down.png";

const Sun = ({ weather }) => {
  const sunset = new Date(weather.sys.sunset * 1000);
  const sunrise = new Date(weather.sys.sunrise * 1000);
  return (
    <div className="sunSet">
      <img className="sunIcon" src={sunIcon} alt="sun icon" />
      <div className="sunTime">
        <img className="arrow" src={arrowUp} alt="max temp icon" />
        <span>{sunrise.toLocaleTimeString()}</span>
      </div>

      <div className="sunTime">
        <img className="arrow" src={arrowDown} alt="max temp icon" />
        <span> {sunset.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default Sun;

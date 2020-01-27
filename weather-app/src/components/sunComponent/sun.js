import React from "react";

import sunSetIcon from "../../img/sunset-50.png"
import sunRiseIcon from "../../img/sunrise-50.png"

const Sun = ({ weather }) => {
  const sunset = new Date(weather.sys.sunset * 1000);
  const sunrise = new Date(weather.sys.sunrise * 1000);
  return (
    <div className="sunSet">
      <div className="sunTime">
        <img src={sunRiseIcon} alt="sunrise icon"></img>
        <span>{sunrise.toLocaleTimeString()}</span>
      </div>

      <div className="sunTime">
        <img src={sunSetIcon} alt="sunset icon"></img>
        <span>{sunset.toLocaleTimeString()} </span>
      </div>
    </div>
  );
};

export default Sun;

import React from "react";

import ArrowIcon from "../common/arrow";


const Temp = ({ weather }) => {
  return (
    <div className="tempBoxCont">
      <h1>
        {(weather.main.temp - 272.15).toFixed(1) + String.fromCharCode(176)}
      </h1>
      <span className="minMaxTemp">
        <ArrowIcon arrowColor="#ffff" arrowType="up"></ArrowIcon>
        {(weather.main.temp_max - 272.15).toFixed(1) + String.fromCharCode(176)}
        <ArrowIcon arrowColor="ffff" arrowType="down"></ArrowIcon>
        {(weather.main.temp_min - 272.15).toFixed(1) + String.fromCharCode(176)}
      </span>
    </div>
  );
};

export default Temp;

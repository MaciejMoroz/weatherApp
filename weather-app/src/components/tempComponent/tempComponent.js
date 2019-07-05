import React from "react";
import "./tempComponent.scss";
import arrowUp from "../../img/arrow_up.png";
import arrowDown from "../../img/arrow_down.png";

const Temp = ({ weather }) => {
  return (
    <div className="tempBoxCont">
      <h1>
        {(weather.main.temp - 272.15).toFixed(1) + String.fromCharCode(176)}
      </h1>
      <span className="minMaxTemp">
        <img src={arrowUp} alt="max temp icon" />{" "}
        {(weather.main.temp_max - 272.15).toFixed(1) + String.fromCharCode(176)}
        <img src={arrowDown} alt="min temp icon" />{" "}
        {(weather.main.temp_min - 272.15).toFixed(1) + String.fromCharCode(176)}
      </span>
    </div>
  );
};

export default Temp;

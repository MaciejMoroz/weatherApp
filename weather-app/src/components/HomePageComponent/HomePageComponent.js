import React, { useEffect } from "react";
// import store from "../../store/store";

const HomePage = ({ location, getLocation }) => {
  useEffect(() => {
    if (!location.longitude) {
      getLocation();
    }
  });

  return (
    <div>
      <div>
        Latitude: <span>{location.latitude}</span>
      </div>
      <div>
        Longitude: <span>{location.longitude}</span>
      </div>
    </div>
  );
};

export default HomePage;

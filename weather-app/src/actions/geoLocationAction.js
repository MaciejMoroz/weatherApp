export const ACTION_TYPES = {
  GET_LOCATION: "GET_LOCATION",
  SET_LOCATION: "SET_LOCATION"
};
export const setLocation = (lat, lon) => {
  return {
    type: ACTION_TYPES.SET_LOCATION,
    geoLocation: {
      coords: {
        latitude: lat,
        longitude: lon,
      }
    }
  }

}


export const getLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error("Not Supported"));
      return
    }

    geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      () => {
        reject(new Error("Permission denied"));

      }
    );
  });

  return {
    type: ACTION_TYPES.GET_LOCATION,
    payload: location
  };
};

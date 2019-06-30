export const ACTION_TYPES = {
  GET_LOCATION: "GET_LOCATION"
};

export const getLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error("Not Supported"));
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

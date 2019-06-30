import { ACTION_TYPES } from "../actions/geoLocationAction";

const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
};

const geoLocation = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default geoLocation;

import { ACTION_TYPES } from "../actions/geoLocationAction";


const INIT_STATE = {
  coords: {
    latitude: 52.23547,
    longitude: 21.04191
  }
};


const defaultState =
  JSON.parse(localStorage.getItem('coords'))
  ||
  INIT_STATE;


const geoLocation = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCATION:
      return action.geoLocation;
    case ACTION_TYPES.GET_LOCATION:
      return action.geoLocation;
    default:
      return state;
  }
};

export default geoLocation;

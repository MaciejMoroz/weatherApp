import { ACTION_TYPES } from "../actions/weatherActions";

const initState = { weather: null, isLoading: true, isError: false };

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.WEATHER_FETCH:
      return { ...initState };
    case ACTION_TYPES.WEATHER_FETCH_SUCCESS:
      return { weather: action.weather, isLoading: false, isError: false };
    case ACTION_TYPES.WEATHER_FETCH_ERROR:
      return { weather: null, isLoading: false, isError: true };
    default:
      return state;
  }
};
export default weatherReducer;

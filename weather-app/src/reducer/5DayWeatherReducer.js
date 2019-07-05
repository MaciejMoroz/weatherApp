import { ACTION_TYPES } from "../actions/5dayWeatherActions";

const initState = { d5_weather: null, isLoading: true, isError: false };

const Weather_5d_Reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DAY_5_WEATHER_FETCH:
      return { ...initState };
    case ACTION_TYPES.DAY_5_WEATHER_FETCH_SUCCESS:
      return {
        d5_weather: action.d5_weather,
        isLoading: false,
        isError: false
      };
    case ACTION_TYPES.DAY_5_WEATHER_FETCH_ERROR:
      return { d5_weather: null, isLoading: false, isError: true };
    default:
      return state;
  }
};
export default Weather_5d_Reducer;

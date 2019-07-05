import { combineReducers } from "redux/es/redux";
import WeatherReducer from "./WeatherReducer";
import Weather_5d_Reducer from "./WeatherReducer";
import geoLocationReducer from "./geoLocationReducer";

export default combineReducers({
  weather: WeatherReducer,
  d5_weather: Weather_5d_Reducer,
  geoLocation: geoLocationReducer
});

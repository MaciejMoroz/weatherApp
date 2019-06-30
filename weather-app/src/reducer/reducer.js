import { combineReducers } from "redux/es/redux";
import weatherReducer from "./WeatherReducer";
import geoLocationReducer from "./geoLocationReducer";

export default combineReducers({
  weatherReducer: weatherReducer,
  geoLocation: geoLocationReducer
});

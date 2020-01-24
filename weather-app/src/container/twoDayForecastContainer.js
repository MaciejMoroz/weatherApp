import { connect } from "react-redux";

import TwoDaysForecast from "../components/twoDaysForecastComponent/twoDaysForecastComponent";

import { getLocation } from "../actions/geoLocationAction";
import { fetch_5day_WeatherWithRedux } from "../actions/twoDayForecastActions";

const mapDispatchToProps = {
  getLocation,
  fetch_5day_WeatherWithRedux: (lat, lon) =>
    fetch_5day_WeatherWithRedux(lat, lon)
};

const mapStateToProps = state => ({
  d5_weather: state.d5_weather.d5_weather,
  d5_isError: state.d5_weather.d5_isError,
  d5_isLoading: state.d5_weather.d5_isLoading
});

const twoDayForecastContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TwoDaysForecast);

export default twoDayForecastContainer;

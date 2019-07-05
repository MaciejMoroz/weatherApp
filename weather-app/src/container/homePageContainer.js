import { connect } from "react-redux";

import HomePage from "../components/HomePageComponent/HomePageComponent";

import { getLocation } from "../actions/geoLocationAction";
import { fetchWeatherWithRedux } from "../actions/weatherActions";
import { fetch_5day_WeatherWithRedux } from "../actions/5dayWeatherActions";

// const getUserWeather = state => state.weather;

const mapDispatchToProps = {
  getLocation,
  fetch_5day_WeatherWithRedux: (lat, lon) =>
    fetch_5day_WeatherWithRedux(lat, lon),
  fetchWeatherWithRedux: (lat, lon) => fetchWeatherWithRedux(lat, lon)
};

const mapStateToProps = state => ({
  location: state.geoLocation.coords,
  weather: state.weather.weather,
  isLoading: state.weather.isLoading,
  isError: state.weather.isError,
  d5Weather: state.d5_weather.d5_weather
  // isLoading_d5: state.d5_weather.isLoading,
  // isError_d5: state.d5_weather.isError
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;

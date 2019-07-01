import { connect } from "react-redux";

import HomePage from "../components/HomePageComponent/HomePageComponent";

import { getLocation } from "../actions/geoLocationAction";
import { getWeather, fetchWeatherWithRedux } from "../actions/weatherActions";

// const getUserWeather = state => state.weather;

const mapDispatchToProps = {
  getLocation,
  getWeather,
  fetchWeatherWithRedux: (lat, lon) => fetchWeatherWithRedux(lat, lon)
};

const mapStateToProps = state => ({
  location: state.geoLocation.coords,
  weather: state.weather.weather,
  isLoading: state.weather.isLoading,
  isError: state.weather.isError
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;

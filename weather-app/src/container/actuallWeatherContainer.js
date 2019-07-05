import { connect } from "react-redux";

import ActuallWeather from "../components/actuallWeather/actualWeatherComponent";

import { fetchWeatherWithRedux } from "../actions/weatherActions";

const mapDispatchToProps = {
  fetchWeatherWithRedux: (lat, lon) => fetchWeatherWithRedux(lat, lon)
};

const mapStateToProps = state => ({
  location: state.geoLocation.coords,
  weather: state.weather.weather,
  isLoading: state.weather.isLoading,
  isError: state.weather.isError
});

const ActuallWeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActuallWeather);

export default ActuallWeatherContainer;

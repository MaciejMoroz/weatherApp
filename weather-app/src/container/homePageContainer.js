import { connect } from "react-redux";

import HomePage from "../components/HomePageComponent/HomePageComponent";

import { getLocation, setLocation } from "../actions/geoLocationAction";

const mapDispatchToProps = {
  getLocation,
  setLocation
};

const mapStateToProps = state => ({
  location: state.geoLocation.coords
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;

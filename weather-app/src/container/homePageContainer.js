import { connect } from "react-redux";

import HomePage from "../components/HomePageComponent/HomePageComponent";
import { getLocation, setLocation } from "../actions/geoLocationAction";

const mapStateToProps = state => ({
  location: state.geoLocation.coords
});
const mapDispatchToProps = {
  getLocation,
  setLocation
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps

)(HomePage);

export default HomePageContainer;

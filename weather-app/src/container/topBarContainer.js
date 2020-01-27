import { connect } from "react-redux";

import TopBar from "../components/TopBarComponent/TopBarComponent";

import { getLocation, setLocation } from "../actions/geoLocationAction";

const mapDispatchToProps = {
  getLocation,
  setLocation
};

const mapStateToProps = state => ({
  location: state.geoLocation.coords
});

const TopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);

export default TopBarContainer;

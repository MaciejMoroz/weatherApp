import { connect } from "react-redux";

import CitesList from "../components/CitiesListComponent/CitiesList";

import { getLocation, setLocation } from "../actions/geoLocationAction";

const mapDispatchToProps = {
  getLocation,
  setLocation
};

const mapStateToProps = state => ({
  location: state.geoLocation.coords
});

const CitesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CitesList);

export default CitesListContainer;

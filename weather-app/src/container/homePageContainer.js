import { connect } from "react-redux";

import HomePage from "../components/HomePageComponent/HomePageComponent";

const mapStateToProps = state => ({
  location: state.geoLocation.coords
});

const HomePageContainer = connect(
  mapStateToProps

)(HomePage);

export default HomePageContainer;

import { ACTION_TYPES } from "../actions/weatherActions";

// const initState = { weather: null, isLoading: true, isError: false };

const weatherRedycer = (userGeoLocation = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT_TO_CART:
      return [...userGeoLocation, action.geoLocation];

    case ACTION_TYPES.REMOVE_PRODUCT_FROM_CART:
      return userGeoLocation.filter(product => product.id !== action.productId);
    default:
      return userGeoLocation;
  }
};

export default weatherRedycer;

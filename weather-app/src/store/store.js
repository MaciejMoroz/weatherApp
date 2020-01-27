import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducer/reducer";

const loggerMiddleware = createLogger();

function promiseMiddleware({ dispatch }) {
  function isPromise(val) {
    return val && typeof val.then === "function";
  }

  return next => action => {
    return isPromise(action.geoLocation)
      ? action.geoLocation.then(
        result => dispatch({ ...action, geoLocation: result }),
        error => dispatch({ ...action, geoLocation: error, error: true })
      )
      : next(action);
  };
}

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(promiseMiddleware, loggerMiddleware, thunk)
  )
);

export default store;

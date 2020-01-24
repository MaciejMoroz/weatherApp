import React from "react";
import "./scss/App.scss";
import { Provider } from "react-redux";
import store from "./store/store";

import HomePageContainer from "./container/homePageContainer";

function App() {
  return (
    <>

      <Provider store={store}>
        <HomePageContainer />
      </Provider>
    </>
  );
}

export default App;

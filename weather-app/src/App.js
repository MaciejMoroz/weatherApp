import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

// import HomePage from "./components/HomePageComponent/HomePageComponent";
import HomePageContainer from "./container/homePageContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HomePageContainer />
      </div>
    </Provider>
  );
}

export default App;

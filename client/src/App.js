import React from "react";
import NavigationBar from "./components/NavigationBar";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  country: "uk"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTCOUNTRY":
      return {
         country: action.payload.country
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationBar />
    </Provider>
  );
};

export default App;

import React from "react";
import NavigationBar from "./components/NavigationBar";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  fromCountry: "uk"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FROM_COUNTRY":
      return {
         fromCountry: action.payload.country
      };
    case "SET_To_COUNTRY":
      return {
          toCountry: action.payload.country
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

import React from "react";
import NavigationBar from "./components/NavigationBar";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  value: "uk"
};

const reducer = (state = initialState, action, event) => {
  switch (action.type) {
    case "SELECTCOUNTRY":
      return {
        value: event.target.value
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

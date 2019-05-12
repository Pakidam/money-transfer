import React from "react";
import NavigationBar from "./containers/navigationBar";
import Home from "./containers/Home";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <body>
        <NavigationBar />
        <Home />
      </body>
    </div>
  );
}

export default App;

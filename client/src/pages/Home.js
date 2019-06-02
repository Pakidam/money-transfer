import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import DropdownCountries from "../components/DropdownCountries";

class Home extends Component {
  render() {
    return (
      <div>
        <span>Send to:</span>
        <DropdownCountries />
        <Button primary>Get started</Button>
      </div>
    );
  }
}

export default Home;

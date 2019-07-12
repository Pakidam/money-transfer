import React, { Component } from "react";
import SignUp1 from "../pages/SignUp1";
import SignUp2 from "../pages/SignUp2";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import DropdownCountries from "./DropdownCountriesFrom";
import LanguageList from "./LanguageList";

class NavigationBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <Menu stackable>
          <Menu.Item as={Link} to="/">
            moneyTransfer
          </Menu.Item>

          <Menu.Item
            name="countries"
            active={activeItem === "countries"}
            onClick={this.handleItemClick}
          >
            <span>Send from:</span>
            <DropdownCountries />
          </Menu.Item>

          <Menu.Item
            name="languages"
            active={activeItem === "languages"}
            onClick={this.handleItemClick}
          >
            <LanguageList />
          </Menu.Item>

          <div class="right menu">
            <Menu.Item
              as={Link}
              to="/login/"
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            >
              <Link to="/login/">Login</Link>
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/signup1/"
              name="signup1"
              active={activeItem === "signup1"}
              onClick={this.handleItemClick}
            >
              Signup
            </Menu.Item>
          </div>
        </Menu>

        <Route exact path="/" component={Home} />
        <Route path="/signup1/" component={SignUp1} />
        <Route path="/signup2/" component={SignUp2} />
        <Route path="/login/" component={LogIn} />
      </Router>
    );
  }
}

export default NavigationBar;

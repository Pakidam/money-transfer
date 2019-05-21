import React from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Home from "./Home";
import CountriesList from "./CountriesList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles.css";

const NavigationBar = () => {
  return (
    <Router>
      <header id="main-header">
        <div className="main-header-top">
          <Link to="/">moneyTransfer </Link>
        </div>

        <nav className="main-nav">
          <div className="selectors">
            <ul className="clean">
              <li className="selector-from">
                <label>Send from:</label>
                <div
                  id="wrapSelectFrom"
                  className="custom-select"
                  data-track-form-name="send from"
                >
                  <span>United Kingdom</span>
                  <select
                    id="selectFrom"
                    data-track-field-name="from country"
                    data-track-event="change"
                  >
                    <CountriesList />
                  </select>
                </div>
              </li>
              <li className="selector-lang">
                <div
                  id="wrapSelectLanguage"
                  className="custom-select"
                  data-track-form-name="select language"
                >
                  <span>English</span>
                  <select
                    id="selectLanguage"
                    data-track-field-name="language"
                    data-track-event="change"
                  >
                    <option value="da">Dansk</option>
                    <option value="de">Deutsch</option>
                    <option selected value="en">
                      English
                    </option>
                    <option value="es">Espa&ntilde;ol</option>
                    <option value="fr">Fran&ccedil;ais</option>
                    <option value="nl">Nederlands</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>

          <div className="main-menu">
            <ul className="clean">
              <li>
                <a href="/en/help/how-it-works">I'm a business</a>
              </li>
              <li>
                <a href="/en/help/how-it-works">How it works</a>
              </li>
              <li>
                <a href="/en/help">Help</a>
              </li>
              <li>
                <Link to="/login/">Login</Link>
              </li>
              <li>
                <Link to="/signup/" className="button-subtle">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div id="app">
        <div className="top-sticky-container sticky-generic-error in-background">
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/signup/" component={SignUp} />
            <Route path="/login/" component={LogIn} />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default NavigationBar;

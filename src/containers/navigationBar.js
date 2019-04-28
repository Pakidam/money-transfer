import React from "react";
import "../styles.css";

const NavigationBar = () => {
  return (
    <header id="main-header">
      <div className="main-header-top">moneyTransfer</div>

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
                  <option value="au">Australia</option>
                  <option value="at">Austria</option>
                  <option value="bh">Bahrain</option>
                  <option value="be">Belgium</option>
                  <option value="br">Brazil</option>
                  <option value="bg">Bulgaria</option>
                  <option value="cm">Cameroon</option>
                  <option value="ca">Canada</option>
                  <option value="hr">Croatia</option>
                  <option value="cy">Cyprus</option>
                  <option value="cz">Czech Republic</option>
                  <option value="dk">Denmark</option>
                  <option value="ee">Estonia</option>
                  <option value="fi">Finland</option>
                  <option value="fr">France</option>
                  <option value="de">Germany</option>
                  <option value="gi">Gibraltar</option>
                  <option value="gr">Greece</option>
                  <option value="hk">Hong Kong</option>
                  <option value="hu">Hungary</option>
                  <option value="is">Iceland</option>
                  <option value="ie">Ireland</option>
                  <option value="it">Italy</option>
                  <option value="jp">Japan</option>
                  <option value="jo">Jordan</option>
                  <option value="kw">Kuwait</option>
                  <option value="lv">Latvia</option>
                  <option value="lt">Lithuania</option>
                  <option value="lu">Luxembourg</option>
                  <option value="mt">Malta</option>
                  <option value="nl">Netherlands</option>
                  <option value="nz">New Zealand</option>
                  <option value="no">Norway</option>
                  <option value="om">Oman</option>
                  <option value="pl">Poland</option>
                  <option value="pt">Portugal</option>
                  <option value="qa">Qatar</option>
                  <option value="ro">Romania</option>
                  <option value="sa">Saudi Arabia</option>
                  <option value="sg">Singapore</option>
                  <option value="sk">Slovakia</option>
                  <option value="si">Slovenia</option>
                  <option value="ss">Somaliland</option>
                  <option value="za">South Africa</option>
                  <option value="kr">South Korea</option>
                  <option value="es">Spain</option>
                  <option value="se">Sweden</option>
                  <option value="ch">Switzerland</option>
                  <option value="tw">Taiwan</option>
                  <option value="ae">United Arab Emirates</option>
                  <option value="gb" selected>
                    United Kingdom
                  </option>
                  <option value="us">United States</option>
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
              <a href="/en/account/login">Login</a>
            </li>
            <li>
              <a href="/send/SignUp.aspx" className="button-subtle">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;

import React from "react";
import SignUp from "./SignUp";
import Home from "./Home";
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
                    <option value="al">Albania</option>
                    <option value="ao">Angola</option>
                    <option value="ai">Anguilla</option>
                    <option value="ag">Antigua and Barbuda</option>
                    <option value="ar">Argentina</option>
                    <option value="am">Armenia</option>
                    <option value="au">Australia</option>
                    <option value="at">Austria</option>
                    <option value="bh">Bahrain</option>
                    <option value="bd">Bangladesh</option>
                    <option value="bb">Barbados</option>
                    <option value="by">Belarus</option>
                    <option value="be">Belgium</option>
                    <option value="bj">Benin</option>
                    <option value="bo">Bolivia</option>
                    <option value="ba">Bosnia and Herzegovina</option>
                    <option value="bw">Botswana</option>
                    <option value="br">Brazil</option>
                    <option value="vg">British Virgin Islands</option>
                    <option value="bg">Bulgaria</option>
                    <option value="bf">Burkina Faso</option>
                    <option value="bi">Burundi</option>
                    <option value="kh">Cambodia</option>
                    <option value="cm">Cameroon</option>
                    <option value="ca">Canada</option>
                    <option value="cv">Cape Verde</option>
                    <option value="ky">Cayman Islands</option>
                    <option value="cf">Central African Republic</option>
                    <option value="td">Chad</option>
                    <option value="cl">Chile</option>
                    <option value="cn">China</option>
                    <option value="co">Colombia</option>
                    <option value="km">Comoros</option>
                    <option value="cd">Congo DRC</option>
                    <option value="cg">Congo-Brazzaville</option>
                    <option value="cr">Costa Rica</option>
                    <option value="hr">Croatia</option>
                    <option value="cy">Cyprus</option>
                    <option value="cz">Czech Republic</option>
                    <option value="dk">Denmark</option>
                    <option value="dm">Dominica</option>
                    <option value="do">Dominican Republic</option>
                    <option value="ec">Ecuador</option>
                    <option value="eg">Egypt</option>
                    <option value="sv">El Salvador</option>
                    <option value="ee">Estonia</option>
                    <option value="et">Ethiopia</option>
                    <option value="fj">Fiji</option>
                    <option value="fi">Finland</option>
                    <option value="fr">France</option>
                    <option value="ga">Gabon</option>
                    <option value="gm">Gambia</option>
                    <option value="ge">Georgia</option>
                    <option value="de">Germany</option>
                    <option value="gh">Ghana</option>
                    <option value="gr">Greece</option>
                    <option value="gd">Grenada</option>
                    <option value="gt">Guatemala</option>
                    <option value="gw">Guinea Bissau</option>
                    <option value="gn">Guinea-Conakry</option>
                    <option value="ht">Haiti</option>
                    <option value="hn">Honduras</option>
                    <option value="hk">Hong Kong</option>
                    <option value="hu">Hungary</option>
                    <option value="is">Iceland</option>
                    <option value="in">India</option>
                    <option value="id">Indonesia</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="ci">Ivory Coast</option>
                    <option value="jm">Jamaica</option>
                    <option value="jo">Jordan</option>
                    <option value="kz">Kazakhstan</option>
                    <option value="ke">Kenya</option>
                    <option value="kw">Kuwait</option>
                    <option value="kg">Kyrgyzstan</option>
                    <option value="la">Laos</option>
                    <option value="lv">Latvia</option>
                    <option value="lb">Lebanon</option>
                    <option value="ls">Lesotho</option>
                    <option value="lr">Liberia</option>
                    <option value="lt">Lithuania</option>
                    <option value="mg">Madagascar</option>
                    <option value="mw">Malawi</option>
                    <option value="my">Malaysia</option>
                    <option value="mv">Maldives</option>
                    <option value="ml">Mali</option>
                    <option value="mt">Malta</option>
                    <option value="mr">Mauritania</option>
                    <option value="mu">Mauritius</option>
                    <option value="mx">Mexico</option>
                    <option value="md">Moldova</option>
                    <option value="mc">Monaco</option>
                    <option value="ms">Montserrat</option>
                    <option value="ma">Morocco</option>
                    <option value="mz">Mozambique</option>
                    <option value="na">Namibia</option>
                    <option value="np">Nepal</option>
                    <option value="nl">Netherlands</option>
                    <option value="an">Netherlands Antilles</option>
                    <option value="nz">New Zealand</option>
                    <option value="ni">Nicaragua</option>
                    <option value="ne">Niger</option>
                    <option value="ng">Nigeria</option>
                    <option value="no">Norway</option>
                    <option value="om">Oman</option>
                    <option value="pk">Pakistan</option>
                    <option value="pa">Panama</option>
                    <option value="py">Paraguay</option>
                    <option value="pe">Peru</option>
                    <option value="ph">Philippines</option>
                    <option value="pl">Poland</option>
                    <option value="pt">Portugal</option>
                    <option value="pr">Puerto Rico</option>
                    <option value="qa">Qatar</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russia</option>
                    <option value="rw">Rwanda</option>
                    <option value="ws">Samoa</option>
                    <option value="sn">Senegal</option>
                    <option value="sc">Seychelles</option>
                    <option value="sl">Sierra Leone</option>
                    <option value="sg">Singapore</option>
                    <option value="sk">Slovakia</option>
                    <option value="si">Slovenia</option>
                    <option value="ss">Somaliland</option>
                    <option value="za">South Africa</option>
                    <option value="kr">South Korea</option>
                    <option value="es">Spain</option>
                    <option value="lk">Sri Lanka</option>
                    <option value="kn">St Kitts and Nevis</option>
                    <option value="lc">St Lucia</option>
                    <option value="vc">St Vincent Grenadines</option>
                    <option value="sr">Suriname</option>
                    <option value="se">Sweden</option>
                    <option value="tj">Tajikistan</option>
                    <option value="tz">Tanzania</option>
                    <option value="th">Thailand</option>
                    <option value="tg">Togo</option>
                    <option value="to">Tonga</option>
                    <option value="tn">Tunisia</option>
                    <option value="tr">Turkey</option>
                    <option value="tc">Turks and Caicos</option>
                    <option value="ug">Uganda</option>
                    <option value="ua">Ukraine</option>
                    <option value="ae">United Arab Emirates</option>
                    <option value="us">United States</option>
                    <option value="uy">Uruguay</option>
                    <option value="vn">Vietnam</option>
                    <option value="zm">Zambia</option>
                    <option value="zw">Zimbabwe</option>
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
                <Link to="/signup/" className="button-subtle">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/signup/" component={SignUp} />
    </Router>
  );
};

export default NavigationBar;

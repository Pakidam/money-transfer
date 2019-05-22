import React, { useState } from 'react';
import "../styles.css";
import CountriesList from "../components/CountriesList";

const Home = () => {
  const [toCountry, setCountry] = useState(0);
  return (
    <main id="home">
      <section className="hero">
        <div className="content">
          <form id="send-to-form" className="clearfix">
            <div className="custom-select">
              <span>{toCountry ? toCountry : 'Choose a country to send to'}</span>
              <select id="selectTo" name="select-destination" onChange={e => {
                    console.log(e.target);
                    setCountry(e.target.value)
                }} selected={toCountry}>
                <option value="0">Choose a country to send to</option>
                <CountriesList />
              </select>
            </div>

            <a id="sendTargetHREF" href="/en/" className="button-cta">
              Get started
            </a>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;

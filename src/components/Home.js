import React, { useState } from 'react';

import "../styles.css";
import Countries from "../resources/Countries";

const Home = () => {
  const [selectedCountry, setCountry] = useState(0);

  return (
    <main id="home">
      <section className="hero">
        <div className="content">
          <form id="send-to-form" className="clearfix">
            <div className="custom-select">
              <span>Choose a country to send to </span>
              <select id="selectTo" name="select-destination" onChange={(e)=>{setCountry(e.target.value)}} value={selectedCountry}>
                {Countries.map(
                  (c) => <option value={c.value}>{c.name}</option>
                )}
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

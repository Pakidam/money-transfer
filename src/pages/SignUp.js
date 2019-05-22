import React from "react";
import "../styles.css";
import CountriesList from "../components/CountriesList";

const SignUp = () => {
  return (
    <section id="signup-page">
      <div className="flex-row">
        <div class="flex-column column-1-2" style={{ margin: "auto" }}>
          <div className="copy-text">
            <h1>Create an account. It’s free!</h1>
            <p>
              Already have an account?
              <a href="/en/account/login">
                <strong> Log in</strong>
              </a>
            </p>
          </div>
          <p className="notification-simple">
            <span>
              At moneyTransfer, we respect your privacy and always treat your
              personal data securely in compliance with strict data protection
              regulations.
            </span>
          </p>
          <form className="change-country-form">
            <div className="country-picker">
              <div className="country">
                <img
                  src="//res.cloudinary.com/worldremit/image/upload/v1526638629/images/flags/circle/flag-gb.svg"
                  className="flag"
                  alt="United Kingdom"
                />
                <p>Send from United Kingdom</p>
                <select className="track-change">
                  <CountriesList />
                </select>
              </div>
              <span className="icon-chevron-down" />
            </div>
          </form>
          <form className="form-builder">
            <section className="form-builder-group">
              <p className="group-label">Your full name</p>
              <section className="form-field form-builder-section string">
                <label for="SenderFirstName" className="">
                  First name
                </label>
                <div className="form-field-validation ">
                  <div className="form-control">
                    <input
                      type="text"
                      className="track-blur"
                      placeholder="First name"
                    />
                  </div>
                </div>
              </section>
              <section
                className="form-field form-builder-section string"
                id="form-builder-section-SenderMiddleName"
              >
                <label for="SenderMiddleName" className="">
                  Middle name
                </label>
                <div className="form-field-validation ">
                  <div className="form-control">
                    <input
                      type="text"
                      className="track-blur"
                      id="SenderMiddleName"
                      maxLength=""
                      name="SenderMiddleName"
                      placeholder="Middle name"
                      value=""
                    />
                    <span className="form-field-help-text" role="presentation">
                      Optional
                    </span>
                  </div>
                  <div className="form-field-hint-error-handler" />
                </div>
              </section>
              <section
                className="form-field form-builder-section string"
                id="form-builder-section-SenderLastName"
              >
                <label for="SenderLastName" className="">
                  Last name
                </label>
                <div className="form-field-validation ">
                  <div className="form-control">
                    <input
                      type="text"
                      className="track-blur"
                      id="SenderLastName"
                      placeholder="Last name"
                      value=""
                    />
                  </div>
                  <div className="form-field-hint-error-handler">
                    <p className="form-field-hint">
                      Please input your full legal name as shown on your
                      passport or driving license
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <section className="form-builder-group">
              <p className="group-label">Your login details</p>
              <section
                className="form-field form-builder-section email"
                id="form-builder-section-SenderEmail"
              >
                <label for="SenderEmail" className="">
                  Email
                </label>
                <div className="form-field-validation ">
                  <div className="form-control">
                    <input
                      type="email"
                      className="track-blur"
                      id="SenderEmail"
                      maxLength=""
                      name="SenderEmail"
                      placeholder="Email"
                      data-track-interaction-name="form tracking"
                      data-track-field-name="SenderEmail"
                      value=""
                    />
                  </div>
                  <div className="form-field-hint-error-handler" />
                </div>
              </section>
              <section
                className="form-field form-builder-section password"
                id="form-builder-section-SenderPassword"
              >
                <label for="SenderPassword" className="">
                  Password
                </label>
                <div className="form-field-validation ">
                  <div className="form-control">
                    <div className="password-field">
                      <input
                        type="password"
                        className="track-blur"
                        id="SenderPassword"
                        maxLength=""
                        name="SenderPassword"
                        placeholder="Password"
                        data-track-interaction-name="form tracking"
                        data-track-field-name="SenderPassword"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-field-hint-error-handler">
                    <p className="form-field-hint">
                      Your password should be at least 8 characters, and include
                      1 upper case letter, 1 lower case letter and 1 number.
                    </p>
                  </div>
                </div>
              </section>
              <section
                className="form-field form-builder-section string"
                id="form-builder-section-SenderReferralCode"
              >
                <label for="SenderReferralCode" className="">
                  Referral Code
                </label>
                <div className="mantle">
                  <p>Got a referral code?</p>
                  <input
                    type="checkbox"
                    id="referral-code"
                    name="referral-code"
                  />
                  <label className="toggle" for="referral-code" />
                  <div className="mantle-content">
                    <div className="form-field-validation ">
                      <div className="form-control">
                        <span className="informative-field">
                          <span className="icon-gift" />
                          <input
                            type="text"
                            className="track-blur"
                            id="SenderReferralCode"
                            maxLength=""
                            name="SenderReferralCode"
                            placeholder="Referral Code"
                            data-track-interaction-name="form tracking"
                            data-track-field-name="SenderReferralCode"
                            value=""
                          />
                        </span>
                        <span
                          className="form-field-help-text"
                          role="presentation"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="form-field-hint-error-handler" />
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <section
              className="form-field form-builder-section checkbox"
              id="form-builder-section-SenderTermsAndConditionsCheckboxGDPR"
            >
              <div className="form-field-validation ">
                <div className="form-control">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="SenderTermsAndConditionsCheckboxGDPR"
                      name="SenderTermsAndConditionsCheckboxGDPR"
                      value="true"
                    />
                    <label for="SenderTermsAndConditionsCheckboxGDPR">
                      <span>
                        If you DO NOT wish to receive marketing information
                        about our products and special offers, please check this
                        box. You can manage your push notification preferences
                        on your mobile device.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-field-hint-error-handler" />
              </div>
            </section>
            <input
              type="hidden"
              name="_csrf"
              value="tLU1QnNh-O8e_aiWKDWsPcH9zQEYowX3ty1I"
            />
            <button
              type="submit"
              className="button-mega-cta track-click"
              data-track-interaction-name="form submit"
            >
              <span className="text">Continue</span>
            </button>
            <section
              className="form-field form-builder-section displayText"
              id="form-builder-section-SenderGeneralTAndCText"
            >
              <div className="copy-text">
                <p>
                  By submitting this form, you accept moneyTransfer
                  <a href="https://www.google.com">
                    Terms and Conditions
                  </a> and <a href="https://www.google.com">Privacy Policy</a>
                </p>
              </div>
            </section>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

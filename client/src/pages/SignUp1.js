import React, { Component } from "react";
import { Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import DropdownCountries from "../components/DropdownCountries";

class SignUp1 extends Component {
  state = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    //const { firstName, middleName, lastName, password, email } = this.state;
    const isValid = this.validate();
    if (isValid) {
      axios.post("http://localhost:5000/users", {
        sending_country: "United Kingdom",
        first_name: "firstName",
        middle_name: "middleName",
        last_name: "lastName",
        email: "email",
        marketing_preference: true
      });
      this.props.history.push("/signup2");
    }
  };

  validate = () => {
    let emailError = "";
    let firstNameError = "";
    let passwordError = "";

    if (this.state.firstName.length === 0) {
      firstNameError = "input name";
    }
    if (firstNameError) {
      this.setState({ firstNameError });
      return false;
    }
    if (this.state.password.length === 0) {
      passwordError = "input password";
    }
    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }
    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailError = "invalid email";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      password,
      email,
      firstNameError,
      lastNameError,
      emailError,
      passwordError
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <span>Send From </span>
        <DropdownCountries />
        <br />

        <span>Your full name </span>
        <Form.Input
          placeholder="First name"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <div style={{ color: "red" }}>{firstNameError}</div>
        <Form.Input
          placeholder="Middle name"
          name="middleName"
          value={middleName}
          onChange={this.handleChange}
        />

        <Form.Input
          placeholder="Last name"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <div style={{ color: "red" }}>{lastNameError}</div>
        <span>Your login details </span>
        <Form.Input
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <div style={{ color: "red" }}>{emailError}</div>
        <Form.Input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <div style={{ color: "red" }}>{passwordError}</div>
        <Form.Field>
          <Checkbox
            label="If you DO NOT wish to receive marketing information
       about our products and special offers, please check this box."
          />
        </Form.Field>
        <Form.Button
          type="submit"
          content="Continue"
          onClick={this.handleClick}
        />
      </Form>
    );
  }
}

export default SignUp1;

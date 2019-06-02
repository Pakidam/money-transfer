import React, { Component } from "react";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {
        email: "",
        password: ""
      },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <h2>Sign up</h2>

        <label>Email address</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={event => this.handleUserInput(event)}
        />

        <label>Password</label>
        <input type="password" name="password" value={this.state.password} />

        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default SignUp2;

import React from "react";
import axios from "axios";

export default class Register extends React.Component {
  state = {
    input: {
      username: "",
      password: ""
    }
  };

  render() {
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </>
    );
  }

  handleInputChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const address = "http://localhost:3300/api/register";
    this.register(address, this.state.input);
  };

  register = (address, credentials) => {
    axios
      .post(address, credentials)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.setState({
          input: {
            username: "",
            password: ""
          }
        })
        this.props.history.push("/login");
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };
}

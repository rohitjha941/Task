import React, { Component } from "react";
import "./index.scss";
import Blue from "../blue";
import axios from 'axios';
export default class Register extends Component {
  state = {
    password: "",
    email: "",
    group: "ANALYST",
    UserAttributes: [
      {
        Name: "phone_number",
        Value: ""
      }
    ]
  };
  handleSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://13.235.90.192:9000/users/",
      data: this.state
    }).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="register">
        <div className="register-title">Sign Up</div>

        <form className="register-form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={e => {
              this.setState({
                email: e.target.value
              });
            }}
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            onChange={e => {
              this.setState({
                UserAttributes: [
                  {
                    Name: "phone_number",
                    Value: e.target.value
                  }
                ]
              });
            }}
            required
          />
          <input
            type="password"
            placeholder="********"
            onChange={e => {
              this.setState({
                password: e.target.value
              });
            }}
            required
          />
          <div className="register-terms">
            By signing up I agree to the &nbsp;
            <Blue>terms & conditions</Blue>
          </div>
          <input className="submit" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./index.scss";
import Blue from "../blue";
import axios from 'axios';
import { NavLink } from "react-router-dom";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    "grant_type": "PASSWORD"
  };
  login = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://13.235.90.192:9000/tokens/",
      data: this.state,
 
    }).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="login">
        <div className="login-heading">
          <Blue>Login</Blue> to know more about us
        </div>

        <form className="login-form" onSubmit={this.login}>
          <label>Email</label>

          <div className="login-input">
            <input
              type="email"
              required
              name = "email"
              onChange={e => {
                this.setState({
                  email: e.target.value
                });
              }}
            ></input>
          </div>
          <label>Password</label>

          <div className="login-input">
            <input
              type="password"
              required
              name = "password"
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
            ></input>
          </div>
          <input className="login-submit" type="submit"></input>
        </form>

        <div className="login-or">
          <span>OR</span>
        </div>

        <div className="login-social">
          <div className="login-social-google">
            <img
              alt="google"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
          </div>

          <div className="login-social-facebook">
            <img
              alt="fb"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png"
            />
          </div>
        </div>

        <div className="login-register">
          Still not a member ? <NavLink to  ="register"><Blue>Register</Blue></NavLink>
        </div>
      </div>
    );
  }
}

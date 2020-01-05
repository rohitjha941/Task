import React, { Component } from "react";
import "./index.scss";
import Blue from "../blue";

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-heading">
          <Blue>Login</Blue> to know more about us
        </div>

        <form className="login-form">
          <label>Email</label>

          <div className="login-input">
            <input type="email" required></input>
          </div>
          <label>Password</label>

          <div className="login-input">
            <input type="password" required></input>
          </div>           
          <input className = "login-submit" type="submit"></input>
        </form>

        <div className = "login-or">
            <span>OR</span>
        </div>

        <div className = "login-social">
            <div className = "login-social-google">
                <img alt  = "google" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
            </div>
        
            <div className = "login-social-facebook">
                <img alt  = "fb" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png" />
            </div>
        </div>

        <div className = "login-register">
            Still not a member ? <Blue>Register</Blue>
        </div>
      </div>
    );
  }
}

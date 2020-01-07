import React, { Component } from "react";
import "./index.scss";
import OtpInput from "react-otp-input";
import axios from 'axios';

export default class OTP extends Component {
  state = {
    ConfirmationCode: ""
  };
  handleOTP = () => {
    console.log(this.props.match.params.email);
    const data = {
        'email' : this.props.match.params.email,
        'ConfirmationCode' : this.state.ConfirmationCode
    }
    axios({
      method: "post",
      url: "http://13.235.90.192:9000/tokens/verification",
      data: data
    }).then(res => {
     alert("Sucess");
    });
  };

  handleChange = otp => {
    this.setState({
      ConfirmationCode: otp
    });
  };
  render() {
    return (
      <div className="otp">
        <div className="otp-header">Verification code</div>
        <div className="otp-details">
          Please type the verification code sent to your mobile
        </div>

        <div className="otp-i">
          <OtpInput
            onChange={otp => this.handleChange(otp)}
            numInputs={4}
            separator={<span>&nbsp;&nbsp;&nbsp;</span>}
            inputStyle="otp-container"
            focusStyle="otp-focus"
            value={this.state.ConfirmationCode}
            isInputNum={true}
          />

          <button type="submit" onClick={this.handleOTP}>
            {" "}
            Submit
          </button>
        </div>
      </div>
    );
  }
}

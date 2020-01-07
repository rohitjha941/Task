import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import Login from "./compopnents/login"
import "./index.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './compopnents/register';
import OTP from './compopnents/otp';
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/" component = {Login} exact = {true} />
                    <Route path = "/register" component = {Register}   />
                    <Route path = "/otp/:email" component = {OTP} />
                </Switch>
                
            </Router>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

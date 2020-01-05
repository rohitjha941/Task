import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import Login from "./compopnents/login"

export default class App extends Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

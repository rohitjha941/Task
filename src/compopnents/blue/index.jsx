import React, { Component } from 'react'
import "./index.scss";
export default class Blue extends Component {
    render() {
        return (
            <span className = "blue">
                {this.props.children}
            </span>
        )
    }
}

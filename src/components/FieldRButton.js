import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
export default class FieldRButton extends Component {
    render() {
        return (
        <Button>{this.props.title}</Button>
        )
    }
}

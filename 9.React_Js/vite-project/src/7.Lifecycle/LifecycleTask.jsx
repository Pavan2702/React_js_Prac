import React, { Component } from 'react'
import { Alert, Button } from "reactstrap"

export default class LifecycleTask extends Component {
    constructor() {
        super()
        this.state = {
            count: 90,
        }
        console.log("----->This is constructor");
    }
    componentDidMount() {
        console.log("----->This is componentDidMount");

    }
    componentDidUpdate(props, state) {
        if (this.state.count > 100) {
            alert("Count is executed")
        }
    }
    render() {
        console.log("----->This is Rander");

        return (
            <>
                <h1>LifecycleTask</h1>
                <h1>Count is {this.state.count} </h1>
                <Button color="danger" onClick={() => this.setState({ count: this.state.count + 1 })}>Count</Button>
            </>

        )
    }
}

import React, { Component } from 'react'

export default class UseStateClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 999
        };
    }

    incount() {
        this.setState({ count: this.state.count+1 });
    }
    render() {
        return (
            <>
                <div>UseStateClass
                    <h1>count is{this.state.count}</h1>
                    <button onClick={() => this.incount()} >Increment</button>
                    <button onClick={()=>this.setState({count:this.state.count-1})}>decre</button>


                </div>
            </>
        )
    }
}

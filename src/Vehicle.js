import React, { Component } from 'react'

class Vehicle extends Component {
    render(){
        return(
        <span>
            <p>{this.props.make}, {this.props.model}</p>
        </span>)
    }
}

export default Vehicle
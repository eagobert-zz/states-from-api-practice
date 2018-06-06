import React, { Component } from 'react'

class Vehicle extends Component {
    render(){
        return(
        <span>
            <p>Vehicle: {this.props.vehicle.make}, {this.props.vehicle.model}</p>
        </span>)
    }
}

export default Vehicle
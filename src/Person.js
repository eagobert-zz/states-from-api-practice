import React, { Component } from 'react'


class Person extends Component {
    render(){
        return(
            <span>
            <h2>{this.props.firstName} {this.props.lastName}</h2>
            <p>{this.props.street}</p>
            <p>{this.props.make}</p>
            <p>{this.props.city}, {this.props.state}</p>
            </span>
        )
    }
}

export default Person
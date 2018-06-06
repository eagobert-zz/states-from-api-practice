import React, { Component } from 'react'


class Person extends Component {
    render(){
        return(
            <span>
            <h2>{this.props.person.firstName} {this.props.person.lastName}</h2>
            <p>{this.props.person.address.street}</p>
            <p>{this.props.person.address.city}, {this.props.person.address.state}</p>
            </span>
        )
    }
}

export default Person
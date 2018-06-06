import React, { Component } from 'react'
import Person from "./Person"
//import Vehicle from "./Vehicle"
//import Pet from "./Pet"


class PeopleList extends Component {
        
    render() {
        return (
            <ul>
                {this.props.people.map(person => {
                    return <Person vehicles={this.props.vehicles} pets={this.props.pets} key={person.id} person={person} />

                })}

            </ul>
        );
    }
}

export default PeopleList
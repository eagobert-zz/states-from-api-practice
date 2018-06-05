import React, { Component } from 'react'
import Person from "./Person"
//import Vehicle from "./Vehicle"
//import Pet from "./Pet"


class PeopleList extends Component {

    render() {
        return (
            <ul>
                {this.props.people.map(person => {
                  return <Person key={person.id} firstName={person.firstName} lastName={person.lastName} street={person.address.street} city={person.address.city} state={person.address.state}/>
                })}
                {/* <li>
                    <Person key={}/>
                    <Vehicle />
                    <Pet />
                </li> */}
            </ul>
        );
    }
}

export default PeopleList
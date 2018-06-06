import React, { Component } from 'react'
import Person from "./Person"
import Vehicle from "./Vehicle"
//import Pet from "./Pet"


class PeopleList extends Component {

    render() {
        return (
            <ul>
                {this.props.people.map(person => {
                  return <Person key={person.id} person={person}/>
                  
                })}
                {/* {this.props.vehicles.map(vehicle => {
                    return <Vehicle key={vehicle.id} make={vehicle.make} model={vehicle.model}/>
                })} */}

            </ul>
        );
    }
}

export default PeopleList
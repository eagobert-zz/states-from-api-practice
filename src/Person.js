import React, { Component } from 'react'
import Vehicle from './Vehicle'
import Pet from './Pet'


class Person extends Component {
    render(){

        const vehicleItem = this.props.vehicles.map(vehicle => {
            if(this.props.person.id === vehicle.peopleId){
                return  <Vehicle key={vehicle.id} vehicle={vehicle} />
            }
         })
        
        const petItem = this.props.pets.map(pet => {
            if(this.props.person.id === pet.peopleId){
                return <Pet key={pet.id} pet={pet}/>
            }
        })

        return(
            <span>
            <h2>{this.props.person.firstName} {this.props.person.lastName}</h2>
            <p>{this.props.person.address.street}</p>
            <p>{this.props.person.address.city}, {this.props.person.address.state}</p>
            {vehicleItem}
            {petItem}
            </span>
        )
    }
}

export default Person
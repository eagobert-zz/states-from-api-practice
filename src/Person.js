import React, { Component } from 'react'
import Vehicle from './Vehicle'
import Pet from './Pet'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';



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
            <Card>
                <CardHeader>
                    <h3>{this.props.person.firstName}  {this.props.person.lastName}</h3>
                </CardHeader>
             
                    <p>{this.props.person.address.street}</p>
                    <p>{this.props.person.address.city}, {this.props.person.address.state}</p>
                    {vehicleItem}
                    {petItem}
            </Card>
        )
    }
}

export default Person
import React, { Component } from 'react'
import PeopleList from './PeopleList'
//import 'typeface-roboto'

//Realize I was supposed to use only my data.  Went a little extra and created more data using fakeJSON. Now I have to fetch multiple collections from API.  Changed class from "Erin" to "Person"
class PeopleContainer extends Component {

//can also add constructor, super(props), and this to the variable "state".

    //set the initial state of parent container
   constructor(props){
       super(props)
       this.state = {
        people: [],
        vehicles: [],
        pets: [],
       // peopleVehicles: [],
       // peoplePets: []
    }
   }
   
    //create function to fetch all people, vehicles, and pet data 
    loadData(){
        
        fetch("http://localhost:8088/people")
        .then(r => r.json())
        .then(people => {
            this.setState({
                people: people
            })
           
            return fetch("http://localhost:8088/vehicles")
        })
        .then(r => r.json())
        .then(vehicles => {
            this.setState({
                vehicles: vehicles
            })
            
            return fetch("http://localhost:8088/pets")
        })
        .then(r => r.json())
        .then(pets => {
            this.setState({
                pets: pets
            })
            
            //view all collections in state
            console.log(this.state)
        })
     
    }

    
    //load data and mount after rendering PeopleContainer
    componentDidMount(){

        //run loadData function in component did mount
        this.loadData()

        }

    render() {
        return (
            // Pass fetched data to the peoplelist component (didn't have to do it this way, but wanted to practice passing data)
            <div><PeopleList people={this.state.people} vehicles={this.state.vehicles} pets={this.state.pets} /></div>
        );
    }
}

export default PeopleContainer
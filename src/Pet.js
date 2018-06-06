import React, { Component } from 'react'

class Pet extends Component {
render(){
    return(
    <span>
     <p>Pet: {this.props.pet.name} the {this.props.pet.species}</p>
    </span>)
}
}

export default Pet
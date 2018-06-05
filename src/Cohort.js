import React, { Component } from 'react'
import './Cohort.css'

class Cohort extends Component {
    render() {
        return (
            
                <p className="cohort">{this.props.cohort}</p>
            
        );
    }
}

export default Cohort
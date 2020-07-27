import React, { Component } from 'react'

class CountryList extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <td>{this.props.country}</td>
        )
    }
}

export default CountryList;
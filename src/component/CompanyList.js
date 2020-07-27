import React, { Component } from 'react'

class CompanyList extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <td>{this.props.company}</td>
        )
    }
}

export default CompanyList;
import React, { Component } from 'react';

class ContactList extends Component{
    constructor(){
        super();
    }
    render(){
        return <td>{this.props.contact}</td>
    }
}

export default ContactList;

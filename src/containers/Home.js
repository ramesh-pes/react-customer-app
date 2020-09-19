import React, { Component } from 'react';
import Menu from '../components/Menu';
import customerService from '../services/customerService';

class Home extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <h2>HOME </h2>
        <h5>No customer in customer APP : {customerService.getRecords().length}</h5>
            </div>
        );
    }
}

export default Home;
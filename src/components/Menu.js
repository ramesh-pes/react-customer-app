import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class Menu extends Component {
  doLogout=()=>{
    localStorage.removeItem('user')
  }
  render() {
    return (
      <div className="menu">
        <h2>CUSTOMER MANAGEMENT APP</h2>
        <br/>
        <Link to={"/home"}>Home</Link> &nbsp; | &nbsp;
        <Link to={"/customer"}>Customer</Link>  &nbsp;| &nbsp;
        <Link to={"/customer-app"}>CustomerApp</Link>  &nbsp;| &nbsp;
        <Link to={"/temperature"}>Temperature</Link>  &nbsp;| &nbsp;
        <Link to={"/maths"}> Maths</Link>  &nbsp; | &nbsp;
        <Link to={"/about"}>About</Link> &nbsp; | &nbsp;
        <Link onClick={this.doLogout} to={"/login"}>Logout</Link>  &nbsp; | &nbsp;
        <hr />
    
      </div>
    );
  }
}

export default Menu;

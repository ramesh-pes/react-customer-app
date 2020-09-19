import React, { Component } from "react";
import Menu from "../components/Menu";
import customerService from '../services/customerService';

export default class CustomerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: customerService.getRecords(),
      name: "", id: '', email: "", phone: "", address: "",buttonLabel:"Add Customer"
    };
    console.log(this.state);
    this.handleSubmitAddEdit = this.handleSubmitAddEdit.bind(this); // line handles this pointer
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitAddEdit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };
    if(this.state.id !=''){
        newItem.id=this.state.id;
        customerService.updateRecord(newItem)
        this.state.items=customerService.getRecords()
    }
    else{
      newItem.id=Date.now()
      customerService.addRecord(newItem)
        
        this.state.items=customerService.getRecords()
    }
    this.setState({
        name:'',
        email:'',
        phone:'',
        address:'',
        id:'',
        buttonLabel:'Add Customer'

    })
    
  }
  deleteItem = (id) => {
    console.log("id : ", id);
    customerService.deleteRecord(id);
    // var temp = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: customerService.getRecords(),
    });
  };

  editItem = (id) => {
    console.log("edit id : ", id);
    var temp = this.state.items.filter((item) => item.id == id);
    console.log("temp :  ", temp[0]);
    this.setState({
        name:temp[0].name,
        email:temp[0].email,
        phone:temp[0].phone,
        address:temp[0].address,
        id:temp[0].id,
        buttonLabel:"Edit Customer"
    })
  };

  render() {
    return (
      <div>
        <Menu/>
        <h3>CUSTOMER APP</h3>

        <form onSubmit={this.handleSubmitAddEdit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="name"
          />
          <br />
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="email"
          />
          <br />
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            placeholder="phone"
          />
          <br />
          <input
            type="text"
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
            placeholder="address"
          />
          <br />
          <br />
          <button>{this.state.buttonLabel}</button>
          <br />
          <br />
        </form>
        <CustomerList
          items={this.state.items}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

class CustomerList extends React.Component {
  render() {
    return (
      <div>
        <table border="1" cellPadding="7" cellSpacing="7">
          <thead>
            <tr>
              <th width="20px">No</th>
              <th width="250px">Name</th>
              <th width="220px">Email</th>
              <th width="100px">Phone</th>
              <th width="300px">Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td id={item.id}>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <button
                    onClick={() => {
                      this.props.editItem(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.props.deleteItem(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

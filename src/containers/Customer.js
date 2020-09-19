import React, { Component, useEffect, useState } from "react";
import Menu from "../components/Menu";
import { Button, Table,Container, Row } from 'react-bootstrap';
import customerService from "../services/customerService";

///using api to fetch data from server
var apiCustomer = "http://localhost:4000/api/customer";
export default function Customer(props) {
  const [init, setInit] = useState(false);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    if (!init) {
      setInit(true);

      fetch(apiCustomer)
        .then((res) => res.json())
        .then(
          (result) => {
            setCustomers(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            //manage error
          }
        );
    }
  });

  var deleteItem = (item) => {
    console.log("id : ", item.id);
    fetch(apiCustomer,{
      method:'DELETE',
      body:JSON.stringify(item),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(result=>{
      setInit(false)
    })
    
    // customerService.deleteRecord(id);
    // var temp = this.state.items.filter((item) => item.id !== id);
  };
  return (
    <div>
      <Menu />
      <h3>Customers from server</h3>
      <button
        onClick={() => {
          props.history.push("/customer/add");
        }}
      >
        Add Customer
      </button>
      <br />
      <br />
      <Container>
        <Row>
      <Table striped bordered hover size="sm">
      <thead >
          <tr>
            <th width="20px">No</th>
            <th width="250px">Name</th>
            <th width="220px">Email</th>
            <th width="100px">Phone</th>
            <th width="300px">Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>
                <Button
                  onClick={() => {
                    props.history.push("/customer/edit/" + item.id);
                  }}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => deleteItem(item)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Row>
      </Container>
      <table border="1" cellPadding="7" cellSpacing="7">
        <thead>
          <tr>
            <th width="20px">No</th>
            <th width="250px">Name</th>
            <th width="220px">Email</th>
            <th width="100px">Phone</th>
            <th width="300px">Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>
                <button
                  onClick={() => {
                    props.history.push("/customer/edit/" + item.id);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteItem(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// import React, { Component } from "react";
// import Menu from "../components/Menu";
// import customerService from '../services/customerService';

// export default class Customer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           items: customerService.getRecords(),
//           name: "", id: '', email: "", phone: "", address: "",buttonLabel:"Add Customer"
//         };
//         console.log(this.state);
//         this.handleSubmitAddEdit = this.handleSubmitAddEdit.bind(this); // line handles this pointer
//       }
//       handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//       };

//       handleSubmitAddEdit(e) {
//         e.preventDefault();
//         if (!this.state.name.length) {
//           return;
//         }

//         const newItem = {
//           name: this.state.name,
//           email: this.state.email,
//           phone: this.state.phone,
//           address: this.state.address,
//         };
//         if(this.state.id !=''){
//             newItem.id=this.state.id;
//             customerService.updateRecord(newItem)
//             this.state.items=customerService.getRecords()
//         }
//         else{
//           newItem.id=Date.now()
//           customerService.addRecord(newItem)

//             this.state.items=customerService.getRecords()
//         }
//         this.setState({
//             name:'',
//             email:'',
//             phone:'',
//             address:'',
//             id:'',
//             buttonLabel:'Add Customer'

//         })

//       }
//       deleteItem = (id) => {
//         console.log("id : ", id);
//         customerService.deleteRecord(id);
//         // var temp = this.state.items.filter((item) => item.id !== id);
//         this.setState({
//           items: customerService.getRecords(),
//         });
//       };

//       editItem = (id) => {
//         console.log("edit id : ", id);
//         var temp = this.state.items.filter((item) => item.id == id);
//         console.log("temp :  ", temp[0]);
//         this.setState({
//             name:temp[0].name,
//             email:temp[0].email,
//             phone:temp[0].phone,
//             address:temp[0].address,
//             id:temp[0].id,
//             buttonLabel:"Edit Customer"
//         })
//       };

//   render() {
//     return (
//       <div>
//           <Menu/>
//         <h3>CUSTOMERS</h3>
//         <button onClick={()=>this.props.history.push('/customer/add')} >Add Customer</button> &nbsp; &nbsp;<br/><br/>
//         <table border="1" cellpadding="7" cellspacing="7">
//           <thead>
//             <tr>
//               <th width="20px">No</th>
//               <th width="250px">Name</th>
//               <th width="220px">Email</th>
//               <th width="100px">Phone</th>
//               <th width="300px">Address</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.items.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.phone}</td>
//                 <td>{item.address}</td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       this.props.history.push('/customer/edit/'+item.id)
//                     }}
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       this.deleteItem(item.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

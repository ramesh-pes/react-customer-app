import React, { useState, useEffect } from "react";
import customerService from "../services/customerService";

var apiCustomer = "http://localhost:4000/api/customer";
function CustomerAdd(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState(Date.now());
  var handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    }
  };
  var handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length) {
      return;
    }
    const newItem = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      
    };
    // customerService.addRecord(newItem)
    fetch(apiCustomer, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(()=>props.history.push("/customer"));
    
  };

  useEffect(() => {
    console.log("id is" + props.match.params.id);
  });

  return (
    <div>
      <h2>Add Customer</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="email"
        />
        <br />
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={phone}
          placeholder="phone"
        />
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={address}
          placeholder="address"
        />
        <br />
        <br />
        <button> Add Customer</button>
        <br />
        <br />
      </form>
    </div>
  );
}
export default CustomerAdd;

import React,{useState,useEffect} from 'react';
import customerService from '../services/customerService';
var apiCustomer = "http://localhost:4000/api/customer";
   function CustomerEdit(props) {
    // const [name, setName] = useState(customerService.getRecordById(props.match.params.id).name);
    // const [email, setEmail] = useState(customerService.getRecordById(props.match.params.id).email);
    // const [phone, setPhone] = useState(customerService.getRecordById(props.match.params.id).phone);
    // const [address, setAddress] = useState(customerService.getRecordById(props.match.params.id).address);
    // const [id, setId]=useState(customerService.getRecordById(props.match.params.id).id)
    const initialCustomer={
        id:null,
        name:'',
        email:'',
        phone:'',
        address:''
    }
    const [customer,setCustomer]=useState(initialCustomer);

    const getCustomer=(id)=>{
        console.log("id is from getcustomer :",id);
        fetch(apiCustomer)
        .then((res) => res.json())
        .then(
          (result) => {
              
              for (let i = 0; i < result.length; i++) {
                if(result[i].id==id){
                    console.log(result[i]);
              setCustomer(result[i]);
            }}
                  
              }
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          
        );
    }

    useEffect(()=>{
        getCustomer(props.match.params.id)
    },[props.match.params.id])

    var handleChange=(e)=>{
        const {name,value}=e.target;
        setCustomer(prevCust=>({...prevCust,
            [name]: value 
        }))
    }
    // var handleChange = (e) => {
    //   if (e.target.name === "email") {
    //     setEmail(e.target.value);
    //   } else if (e.target.name === "name") {
    //     setName(e.target.value);
    //   } else if (e.target.name === "phone") {
    //     setPhone(e.target.value);
    //   } else if (e.target.name === "address") {
    //     setAddress(e.target.value);
    //   }
    // };
    
    var handleSumbit=(e)=>{
        e.preventDefault();
    if (!customer.name.length) {
      return;
    }
    const newItem = {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        id:customer.id
      };
      fetch(apiCustomer,{
          method:'PUT',
          body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(()=>props.history.push("/customer"));

      
    //   customerService.updateRecord(newItem)
    //   props.history.push('/customer')
    }
      
      return (
         <div>
            <h2>EDIT Customer</h2>
            

        <form onSubmit={handleSumbit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={customer.name}
            placeholder="name"
          />
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={customer.email}
            placeholder="email"
          />
          <br />
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={customer.phone}
            placeholder="phone"
          />
          <br />
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={customer.address}
            placeholder="address"
          />
          <br />
          <br />
          <button> Edit Customer</button>
          <br />
          <br />
        </form>
        </div>
      );
      
   }
    export default CustomerEdit;










//     import React,{useState,useEffect} from 'react';
// import customerService from '../services/customerService';
//    function CustomerEdit(props) {
//     // const [name, setName] = useState(customerService.getRecordById(props.match.params.id).name);
//     // const [email, setEmail] = useState(customerService.getRecordById(props.match.params.id).email);
//     // const [phone, setPhone] = useState(customerService.getRecordById(props.match.params.id).phone);
//     // const [address, setAddress] = useState(customerService.getRecordById(props.match.params.id).address);
//     // const [id, setId]=useState(customerService.getRecordById(props.match.params.id).id)
//     const initialCustomer={
//         id:null,
//         name:'',
//         email:'',
//         phone:'',
//         address:''
//     }
//     const [customer,setCustomer]=useState(initialCustomer);

//     const getCustomer=(id)=>{
//         setCustomer(customerService.getRecordById(id))
//     }

//     useEffect(()=>{
//         getCustomer(props.match.params.id)
//     },[props.match.params.id])

//     var handleChange=(e)=>{
//         const {name,value}=e.target;
//         setCustomer(prevCust=>({...prevCust,
//             [name]: value 
//         }))
//     }
//     // var handleChange = (e) => {
//     //   if (e.target.name === "email") {
//     //     setEmail(e.target.value);
//     //   } else if (e.target.name === "name") {
//     //     setName(e.target.value);
//     //   } else if (e.target.name === "phone") {
//     //     setPhone(e.target.value);
//     //   } else if (e.target.name === "address") {
//     //     setAddress(e.target.value);
//     //   }
//     // };
    
//     var handleSumbit=(e)=>{
//         e.preventDefault();
//     if (!customer.name.length) {
//       return;
//     }
//     const newItem = {
//         name: customer.name,
//         email: customer.email,
//         phone: customer.phone,
//         address: customer.address,
//         id:customer.id
//       };
//       customerService.updateRecord(newItem)
//       props.history.push('/customer')
//     }
//       useEffect(()=>{
//         console.log("id is :"+props.match.params.id);
//       })
//       return (
//          <div>
//             <h2>EDIT Customer</h2>
            

//         <form onSubmit={handleSumbit}>
//           <input
//             type="text"
//             name="name"
//             onChange={handleChange}
//             value={customer.name}
//             placeholder="name"
//           />
//           <br />
//           <input
//             type="text"
//             name="email"
//             onChange={handleChange}
//             value={customer.email}
//             placeholder="email"
//           />
//           <br />
//           <input
//             type="text"
//             name="phone"
//             onChange={handleChange}
//             value={customer.phone}
//             placeholder="phone"
//           />
//           <br />
//           <input
//             type="text"
//             name="address"
//             onChange={handleChange}
//             value={customer.address}
//             placeholder="address"
//           />
//           <br />
//           <br />
//           <button> Edit Customer</button>
//           <br />
//           <br />
//         </form>
//         </div>
//       );
      
//    }
//     export default CustomerEdit;

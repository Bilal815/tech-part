import React,{useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';

const CheckoutScreen = () => {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [arrivalTime, setarrivalTime] = useState("");
  const [arrivalDate, setarrivalDate] = useState("");
  const [addressSuggestion, setaddressSuggestion] = useState([]);
  const [showDiv , setshowDiv] = useState(false);
  
  const fetchAddressSuggestion = useDebouncedCallback( (value) => {

    axios({
      method:"GET",
      url:`/api/location/${value}`
    })
    .then(response => {
      if(response.data.status === 200){
        setaddressSuggestion(response.data.response.detail)
      }
      else{
        setaddressSuggestion([])
      }
    })   
    .catch(
      (error) => {console.log(error);
        setaddressSuggestion([])
      }
      )  
  },
  1000
  )

  const handleAddressChange = (e) =>{
    const value = e.target.value;
    setaddress(value);
    fetchAddressSuggestion(value)
  }

  const onSubmit = (e) =>{
    axios({
      method: "POST",
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        address: address,
        arrival_time: arrivalTime,
        arrival_date: arrivalDate,
      },
      url: "/api/checkout",
    })
    .then(data => {
      if(data.status === 200){
      alert(data.data.response.message);
      }})   
    .catch(console.log)
  };
  return (
      <div style={{'marginTop': '150px'}}>
        <div className='container-65'>
        <Form onSubmit={e=>onSubmit(e)}>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>First Name</Form.Label>
            <Form.Control 
            name="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            type="text" 
            placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
            name="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            type="text" 
            placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Arrival Time</Form.Label>
            <Form.Control 
            name="arrivalTime"
            value={arrivalTime}
            onChange={(e) => setarrivalTime(e.target.value)}
            type="time" 
            placeholder="Arrival Time" />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Arrival Date</Form.Label>
            <Form.Control 
            name="arrivalDate"
            value={arrivalDate}
            onChange={(e) => setarrivalDate(e.target.value)}
            type="date" 
            placeholder="Arrival Date" />
          </Form.Group>

        </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
             name="email"
             value={email}
             onChange={(e) => setemail(e.target.value)}
             type="email" 
             placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control 
             type="text" 
             onChange={handleAddressChange}
             value={address}
             placeholder="Enter address" />
          </Form.Group>

          {showDiv ?    
          <div></div>
          :
          <Form.Control as="select" 
          aria-label="Default select example"
          name="address"
          onChange={ (e) => {
            const value = e.target.value;
            setaddress(value);
            setshowDiv(true)
          }}>
            <option>Select Address</option>
          {addressSuggestion.map( a => (
            <option>{a.address} {a.city} {a.country}</option>
          ))}
          </Form.Control>}
          
          <br/>

          <Form.Group className="mb-3" controlId="formBasicphone">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
             name="phone"
             value={phone}
             type="number" 
             onChange={(e) => setphone(e.target.value)}
             placeholder="Enter phone No." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      </div>
  )
}

export default CheckoutScreen;
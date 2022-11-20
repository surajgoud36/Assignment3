import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState,useEffect} from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";
function Signup() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const [bio,setBio]=useState(" ");
  const navigate=useNavigate();
  const createUser=()=>{
    Axios.put(`http://localhost:9000/updateUser/${localStorage.getItem("token")}`,{
      name,
      bio,
      username,
      password,
    }).then((response)=>{
      alert("signup Successful");
      navigate("/Login");
    });
  }
  return (
    <div>
         <Container>
            <Row>
                <Col>
                <p class="h2 text-center">SignUp</p>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(event)=>{setUsername(event.target.value)}}></Form.Control> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(event)=>{setName(event.target.value)}}></Form.Control> 
        
      </Form.Group>
      
      <Button variant="primary" onClick={createUser}>
        Submit
      </Button>
    </Form>
                </Col>
                
            </Row>
        {<p>{email}</p>}
        </Container>
        
    </div>
  )
}

export default Signup
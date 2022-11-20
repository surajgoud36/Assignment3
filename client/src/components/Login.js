import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";
function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  let navigate=useNavigate();

  const loginUser=()=>{
    Axios.post("http://50.17.117.140:9000/loginUser", {
      username,
      password,
    }).then((response)=>{
      if(response.data==="InvalidEmail")
          alert("Invalid Email");
          window.location.reload();
      if(response.data==="InvalidPassword")
          alert("Invalid Password");
          window.location.reload();
      localStorage.setItem("token",response.data);
      alert("Loggin Successful");
      navigate("/");
    })
  }
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <p class="h2 text-center">Login</p>
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(event)=>{setUsername(event.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
      </Form.Group>
      
      <Button variant="primary" onClick={loginUser}>
        Submit
      </Button>
    </Form>
                </Col>
               
            </Row>
        
        </Container>
        <Container className='mt-4 text-center'>
        <Row>
            <Col class="text-center">
              <Link to="/Signup">
                <Button variant="primary">New User! Click Here to SignUp</Button>
              </Link>
            
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Login

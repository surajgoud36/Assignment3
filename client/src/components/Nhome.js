import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import p from '../images/profile.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useState,useEffect} from 'react';
import Axios from "axios";
function Nhome() {
  const [listOfUsers,setListOfUsers]=useState([]);
  const [test,setTest]=useState("yu");
  const useq=localStorage.getItem("token");
  useEffect(()=>{
      Axios.get("http://3.89.93.76:9000/getUsers").then((response)=>{
        setListOfUsers(response.data);
        //setTest(response.data);
        //console.log("hi");
      });
  },[]);
  
  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <>
    <p class="h2 text-center">User Profiles</p>
    <Container>
    <Stack  gap={3}  >
      {listOfUsers.map((user)=>{
        if(user.name!=="suraj"){
          return(
            <Row className='justify-content-md-center'>
          <Card style={{ width: '18rem' }}>
    <Row className='no-gutters '>
    <Col md={5} lg={5}  >
    <Card.Img variant="top" src={p} />
    </Col>
    <Col>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.{user.bio}
      </Card.Text>
      <Button variant="primary">{user.username}</Button>
    </Card.Body>
    </Col>
    </Row>
  </Card>
          </Row>
          );
        }
        
      })}
        
       

    </Stack>
    
    
    {useq && <p>{useq}</p>}
    </Container>
    {localStorage.getItem("token") && <Container className='mt-4 text-center'>
    <Row>
        <Col class="text-center">
        <Button variant="primary" onClick={handleLogout}>logout</Button>
        </Col>
    </Row>
</Container>}
    
    </>
    
    
  )
}

export default Nhome;

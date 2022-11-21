import React from 'react';
import p from '../images/profile.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useState,useEffect} from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
function Home() {
    const [name,setName]=useState("");
    const [bio,setBio]=useState("");
    const [record,setRecord]=useState();
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        Axios.get(`http://3.89.93.76 :9000/testUser/${localStorage.getItem("token")}`).then((response)=>{
            console.log(response.data.name);
            setRecord(response.data);
            setName(response.data.name);
            setBio(response.data.bio);
            setUsername(response.data.username);
            setPassword(response.data.password);
            //console.log(record.name);
        })
     //console.log(localStorage.getItem("token"));
    },[]);
    const updateUser=()=>{
        Axios.put(`http://50.17.117.140:9000/updateUser/${localStorage.getItem("token")}`,{
            name,
            bio,
            username,
            password,
        }).then((response)=>{
            alert("Profile Updated");
            navigate("/");
        });
    }
    return (
        <>
       {record && <>
            <div class="row g-0">
    <div class=" col-md-4 d-flex justify-content-center">
        <img src={p} class="img-fluid rounded-start " alt="dada" width="300px" height="300px"/>
    </div>
    
    <div class=" col-md-6 row g-4">
        <div class="card-body">
            <h5 class="d-flex flex-row " type="text" name="Nam" id="name">{name}</h5>
            <p class="text-start border border-dark border-2 p-2">{bio}</p>
            
            
   
        </div>
    </div>
    <div class="input-group col-md-6 mb-3 mt-3 ">
        <div class="input-group-prepend">
            <span class="input-group-text">Edit Name</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" value={name} onChange={(event)=>{setName(event.target.value)}}></textarea>
    </div>
    
<div class="input-group col-md-6 ">
        <div class="input-group-prepend">
            <span class="input-group-text">Edit Bio</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" value={bio} onChange={(event)=>{setBio(event.target.value)}} ></textarea>
        
    </div>
   

</div>
<Container className='mt-4 text-center'>
    <Row>
        <Col class="text-center">
        <Button variant="primary" onClick={updateUser}>{record && <p>{localStorage.getItem("token")}</p>}</Button>
        </Col>
    </Row>
</Container>
            </>}
        
       
        

        </>
        
    )
}

export default Home

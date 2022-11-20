import React from 'react'
import logo from '../images/hi.png';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Navbar() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token");
    alert(`Logout Success`);
    window.location.reload();
  }
  return (
    <div>
        <nav class="navbar text-light bg-light">
  <div class="container-fluid text-light">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Suraj
    </a>
    <ul class="nav justify-content-center">
      {localStorage.getItem("token") && (<li class="nav-item">
      <a class="nav-link" href="/Home">Add Info</a>
    </li>)}
    
    <li class="nav-item">
      <a class="nav-link" href="/">UserProfiles</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/Add">Addition</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/News">News</a>
    </li>
    {!localStorage.getItem("token") && <li class="nav-item">
      <a class="nav-link" href="/Login">Login</a>
    </li> }
    
    
  </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
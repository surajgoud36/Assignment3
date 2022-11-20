import React, { Component } from "react";
import "./App.css";
import {Add} from './components/Add';
import News from './components/News';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Nhome from './components/Nhome';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    

    render() {
        return (
            <div className="App">
       <Router>
        <Navbar />
        <Routes>
           <Route path="/" exact element={<Nhome/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/Add" exact element={<Add/>}/>
          <Route path="/News" exact element={<News/>}/>
          
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/Signup" exact element={<Signup/>}/>
        </Routes>
     </Router>
    </div>
        );
    }
}

export default App;
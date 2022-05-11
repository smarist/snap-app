import React from "react"
import Home from "../src/Pages/Home"
import Careers from "./Pages/Careers";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import {Routes, Route} from "react-router-dom"
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Careers" element={<Careers/>}/>
        <Route  path="/Register" element={<Register/>}/>
        <Route  path="/Login" element={<Login/>}/>
      </Routes>
      

    </div>
  );
}

export default App;

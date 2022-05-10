import React from "react"
import Home from "../src/Pages/Home"
import Careers from "./Pages/Careers";
import Register from "./Pages/Register";
import {Routes, Route} from "react-router-dom"
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Careers" element={<Careers/>}/>
        <Route exact path="/Register" element={<Register/>}/>
      </Routes>
      

    </div>
  );
}

export default App;

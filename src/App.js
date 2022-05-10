import React from "react"
import Home from "../src/Pages/Home"
import Careers from "./Pages/Careers";
import {Routes, Route} from "react-router-dom"
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Careers" element={<Careers/>}/>
      </Routes>
      

    </div>
  );
}

export default App;

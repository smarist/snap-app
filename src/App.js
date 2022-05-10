import React from "react"
import Home from "../src/Pages/Home"
import Features from "./Pages/Features";
import {Routes, Route} from "react-router-dom"
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Features" element={<Features/>}/>
      </Routes>
      

    </div>
  );
}

export default App;

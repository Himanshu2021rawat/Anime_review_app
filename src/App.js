import React from "react";
import Home from "./component/Home";
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Naruto from "./component/CardDetails.jsx/Naruto";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      
        <Routes>
          <Route path="/naruto" element={<Naruto />} />
     
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

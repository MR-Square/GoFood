import { useState } from "react";
import Home from "./screens/Home";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

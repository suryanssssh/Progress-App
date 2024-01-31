import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Add from "./pages/Add";
import { coinContext } from "./context/coinContext";
function App() {
  const [coinValues, setCoinValues] = useState({});
  return (
    <Router>
      <div>
        <section>
          <coinContext.Provider value={(coinValues, setCoinValues)}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/add" element={<Add />} />
            </Routes>
          </coinContext.Provider>
        </section>
      </div>
    </Router>
  );
}

export default App;

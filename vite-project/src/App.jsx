import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

// App.css ko tabhi rakhein agar aapne custom styling karni ho
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Jab koi base URL '/' par aaye, toh wo automatically Signup par chala jaye */}
          <Route path="/" element={<Navigate to="/signup" />} />

          {/* Signup Page Route */}
          <Route path="/signup" element={<Signup />} />

          {/* Login Page Route */}
          <Route path="/login" element={<Login />} />

          {/* 404 - Agar user koi galat URL likhe toh usey Signup par wapis bhej dein */}
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
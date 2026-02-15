import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "..  /Pages/SignUp";
import Login from "../Pages/Login";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* Default route redirect */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Sign Up page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

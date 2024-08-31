import React from 'react'
import Register from './Rigester/Register'
import Login from './LOGIN/Login'
import Leave from './Leave/Leave';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './Main/Main';
const App = () => {
  return (
   <>
   <Router>
     

      <Routes>
        <Route path="/" element={<Register  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leave" element={<Leave/>} />
        <Route path="/home" element={<Main/>} />
      </Routes>
    </Router>
   
   </>
  )
}

export default App
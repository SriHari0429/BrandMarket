import React, { useState } from 'react'
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Tools from './Components/Tools';
import Pricing from './Components/Pricing';
import Support from './Components/Support';
import Home from './Components/Home';
import Logo from './Components/CreateLogo';
import Login from './Components/Login';
import AnimCursor from './Components/AnimCursor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <AnimCursor/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/createLogo" element={<Logo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App;

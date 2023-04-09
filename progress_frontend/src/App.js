import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Profile from './components/Profile';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          {/* <Route path="*" element={<Outlet />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import StudentDetails from './components/StudentsDetails';
import Home from './components/Home';
import Profile from './components/Profile';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/student" element={<StudentDetails/>} />
          <Route path="/profile" element={<Profile/>} />
          {/* <Route path="*" element={<Outlet />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
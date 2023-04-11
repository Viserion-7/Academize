import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import StudentDetails from './components/StudentsDetails';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/login';
// import Logout from './components/logout';
 
const App = () => {
  return (
    <>
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
           <Route path="/" element={
           <>
           <Login/>
           </>
           }/> 
            <Route path='/home' element={
            <>
            <Navbar />
            <Home />
            </>
            }/>
            <Route path='/student' element={
            <>
            <Navbar />
            <StudentDetails />
            </>
            }/>
            <Route path='/Profile' element={
            <>
            <Navbar />
            <Profile/>
            </>
            }/>
          </Routes>
        </Router>
      </div>
    </>
  );
};
  
export default App;
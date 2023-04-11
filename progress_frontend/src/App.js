import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import StudentDetails from './components/StudentsDetails';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/login';
import Logout from './components/logout';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Login/>} />
//         <Navbar />
//           <Route path="/home" element={<Home/>}/>
//           <Route path="/logout" element={<Logout/>}/>
//           <Route path="/student" element={<StudentDetails/>} />
//           <Route path="/profile" element={<Profile/>} />
//           {/* <Route path="*" element={<Outlet />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

  
const App = () => {
  return (
    <>
    <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />} />
           <Route path="/logout" element={
           <>
           <Navbar />
           <Logout/>
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
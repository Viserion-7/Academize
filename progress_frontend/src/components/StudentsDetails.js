import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DynamicChart from "./chart_cgpa";
import '../App.css';
import notepad from '../components/assets/notepad_small.jpg';

function StudentDetails() {
  useEffect(() => {
    if(localStorage.getItem('access_token') === null){
      window.location.href= '/'
    }
    else{
      (async () => {
        try{
          const {data} = await axios.get('http://localhost:8000/logout/', {
            headers: {
              'Content-Type': 'application/json',
            }
          }
          );
          console.log(data)

          }catch(e) {
            console.log(e)
          }
        })()};
      }, []);

  const [rollNum, setRollNum] = useState("");
  const [semesterNum, setSemesterNum] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showError, setShowError] = useState(false);
  const [matchError, setMatchError] = useState(false);
  // const [showAddStudent, setShowAddStudent] = useState(false);

  const handleStudentSearch = async (e) => {
    e.preventDefault();
    if (!rollNum) {
      setShowError(true);
      return;
    }
    try {
      const semesterNums = semesterNum.split(",");
      const response = await fetch(`http://localhost:8000/api/searchSem/?rollNum=${rollNum}&semesterNum=${semesterNums.join(",")}`);
      const data = await response.json();
      setSearchResults(data);
      setShowError(false);
      console.log(data);
      data.length === 0 ? setMatchError(true) : setMatchError(false);
    } catch (error) {
      console.error(error);
    }

  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', fontSize:'14px', position:"relative", top:'200px'}}>
      <div style={{borderRadius:'10px', padding:'40px', marginTop:'50px', background:'linear-gradient(90deg, rgba(61,25,6,1) 0%, rgba(78,54,48,1) 69%, rgba(76,45,32,1) 93%)'}}>
      <h1 style={{color:'white'}}>Semester GPA</h1>
      <h2 style={{color:'white'}}>Student Details</h2>
      <br />
      <br />
      <form style={{flex:'column', width:'100%'}} onSubmit={handleStudentSearch}>
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNum}
          onChange={(e) => setRollNum(e.target.value)}
          style={{borderRadius:'10px', height:'40px', background:'lightGrey', paddingLeft:'5px'}}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Semesters (comma-seperated)"
          value={semesterNum}
          onChange={(e) => setSemesterNum(e.target.value)}
          style={{borderRadius:'10px', height:'40px', background:'lightGrey', paddingLeft:'5px'}}
        />
        <br />
        <br />
        <button class="buttons" style={{marginLeft:'10px', background: 'linear-gradient(90deg, rgba(61,25,6,1) 0%, rgba(78,54,48,1) 69%, rgba(76,45,32,1) 93%)', borderRadius:'7px', fontSize:'14px', padding:'5px', borderColor:'white', color:'white'}} type="submit">Search</button>
        {showError && (
          <p style={{ color: "red" }}>Please enter a search term</p>
        )}
        {matchError && (
          <p style={{ color: "red", marginLeft:'30px'}}>No results found!</p>
        )}


      </form>
      </div>
      {searchResults.length > 0 &&
        <div style={{margin:'25px', padding:'30px', borderRadius:'10px', background:'linear-gradient(90deg, rgba(61,25,6,1) 0%, rgba(78,54,48,1) 69%, rgba(76,45,32,1) 93%)'}}>
        {searchResults.length > 0 &&
        <div style={{color:'#ffffff', padding:'1%'}}>
          <p style={{fontSize:'25px', fontWeight:'750', textAlign:'start'}}>{searchResults[0].student__name}</p>
          <br />
          <p style={{fontSize:'15px', fontWeight:'500', textAlign:'start'}}>Roll Number: {searchResults[0].student__roll_num}</p>
          <br />
          <p style={{fontSize:'15px', fontWeight:'500', textAlign:'start'}}>Phone: {searchResults[0].student__phone_number}</p>
          <br />
        </div>
        }
        {searchResults.map((item, index) => (
        <div key={index} style={{color:'#ffffff'}}>
          <p style={{fontSize:'18px', fontWeight:'400', textAlign:'start'}}>SGPA-{item.semester_num}: {item.cgpa}</p>
        </div>
      ))}
      </div>
    } 
    {searchResults.length > 0 &&
    <DynamicChart data={searchResults.map(item => ({ name: `SGPA-${item.semester_num}`, value: item.cgpa }))} />
    }
    </div>

  );
}

export default StudentDetails;
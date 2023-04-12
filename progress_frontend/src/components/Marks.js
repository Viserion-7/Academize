import { useState, useEffect } from "react";
import axios from "axios";
import DynamicChart from "./chart_marks";

function Marks() {
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
        const response = await fetch(`http://localhost:8000/api/searchMark/?roll=${rollNum}&sem=${semesterNums.join(",")}`);
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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', fontSize:'14px'}}>
        <div style={{background:'grey', borderRadius:'10px', padding:'40px', marginTop:'50px', background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(35,0,107,1) 36%, rgba(45,0,98,1) 63%, rgba(26,0,85,1) 100%)'}}>
        <h1 style={{color:'white'}}>Student Details</h1>
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
            placeholder="Semesters(comma-seperated)"
            value={semesterNum}
            onChange={(e) => setSemesterNum(e.target.value)}
            style={{borderRadius:'10px', height:'40px', background:'lightGrey', paddingLeft:'5px'}}
          />
          <br />
          <br />
          <button class="buttons" style={{marginLeft:'10px', background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(26,0,85,1) 100%)', borderRadius:'7px', fontSize:'14px', padding:'5px', borderColor:'#23006b', color:'white'}} type="submit">Search</button>
          {showError && (
            <p style={{ color: "red" }}>Please enter a search term</p>
          )}
          {matchError && (
            <p style={{ color: "red", marginLeft:'30px'}}>No results found!</p>
          )}
  
  
        </form>
        </div>
        {searchResults.length > 0 &&
          <div style={{margin:'25px', padding:'30px', borderRadius:'10px', background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(35,0,107,1) 36%, rgba(26,0,85,1) 100%)'}}>
          {searchResults.length > 0 &&
          <div style={{color:'white', padding:'1%'}}>
            <p style={{fontSize:'25px', fontWeight:'750', textAlign:'start'}}>{searchResults[0].student_name__name}</p>
            <br />
            <p style={{fontSize:'15px', fontWeight:'500', textAlign:'start'}}>Roll Number: {searchResults[0].student_name__roll_num}</p>
            <br />
            <p style={{fontSize:'15px', fontWeight:'500', textAlign:'start'}}>Phone: {searchResults[0].student_name__phone_number}</p>
            <br />
          </div>
          }
          
          {searchResults.map((item, index) => {
            if (index === 0 || item.semester_num !== searchResults[index - 1].semester_num) {
          
              return (
                <div key={index} style={{color:'white'}}>
                  <p style={{fontSize:'24px', fontWeight:'600', textAlign:'start'}}>Semester {item.semester_num}</p>
                  <p style={{fontSize:'18px', fontWeight:'400', textAlign:'start'}}>{item.subject__subject}: {item.marks}</p>
                </div>
              );
            } else {
              
              return (
                <div key={index} style={{color:'white'}}>
                  <p style={{fontSize:'18px', fontWeight:'400', textAlign:'start'}}>{item.subject__subject}: {item.marks}</p>
                </div>
              );
            }
          })}
        </div>
      }
      {searchResults.length > 0 && 
      <DynamicChart data={searchResults.map(item => ({name: `${item.subject__subject}`, value: item.marks, semester: item.semester_num }))} />
      }
      </div>
  
    );
  }
  
  export default Marks;
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// function StudentForm() {
//   const [name, setName] = useState("");
//   const [rollNumber, setRollNumber] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8000/api/students/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, roll_number: rollNumber, phone_number: phoneNumber }),
//       });

//       if (response.ok) {
//         console.log(response);
//         console.log("Student added successfully");
//         // Reset the form
//         setName("");
//         setRollNumber("");
//         setPhoneNumber("");
//       } else {
//         console.error("Failed to add student");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Student</h2>
//       <br />
//       <br />
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input style={{float:'right', paddingRight:'20px', marginLeft:'10px'}} type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <br />
//         <div>
//           <label>Roll Number:</label>
//           <input style={{float:'right', paddingRight:'20px', marginLeft:'10px'}} type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
//         </div>
//         <br />
//         <div>
//           <label>Phone Number:</label>
//           <input style={{float:'right', paddingRight:'20px', marginLeft:'10px'}} type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//         </div>
//         <br />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }



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
      const response = await fetch(`http://localhost:8000/api/search/?rollNum=${rollNum}&semesterNum=${semesterNum}`);
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
      <h1 style={{color:'white'}}>Student Details</h1>
      <br />
      <br />
      <form style={{flex:'column'}} onSubmit={handleStudentSearch}>
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNum}
          onChange={(e) => setRollNum(e.target.value)}
          style={{borderRadius:'10px', height:'40px', background:'lightGrey', paddingLeft:'5px'}}
        />
        <br />
        <input
          type="text"
          placeholder="Semester Number"
          value={semesterNum}
          onChange={(e) => setSemesterNum(e.target.value)}
          style={{borderRadius:'10px', height:'40px', background:'lightGrey', paddingLeft:'5px'}}
        />
        <br />
        <br />
        <button style={{marginLeft:'55px', background:'lightGrey', borderRadius:'10px', fontSize:'12px', padding:'3px'}} type="submit">Search</button>
        {showError && (
          <p style={{ color: "red" }}>Please enter a search term</p>
        )}
        {matchError && (
          <p style={{ color: "red", marginLeft:'30px'}}>No results found!</p>
        )}


      </form>
      {searchResults.map((result) => (
        <div key={result.id} style={{color:'white'}}>
          <br />
          <br />
          <h2>{result.student__name}</h2>
          <p>Roll Number: <span style={{marginLeft:'5px'}}>{result.student__roll_num}</span></p>
          <p>Phone: <span style={{marginLeft:'5px'}}>{result.student__phone_number}</span></p>
          <p>CGPA: <span style={{marginLeft:'5px'}}>{result.cgpa}</span></p>
        </div>
      ))}
    </div>
  );
}

export default StudentDetails;
import React, { useState } from "react";


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
  const [rollNum, setRollNum] = useState("");
  const [semesterNum, setSemesterNum] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showError, setShowError] = useState(false);
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', fontSize:'14px'}}>
      <h1 style={{color:'white'}}>Student Details</h1>
      <form style={{display:'flex'}} onSubmit={handleStudentSearch}>
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNum}
          onChange={(e) => setRollNum(e.target.value)}
          style={{borderRadius:'10px', height:'40px'}}
        />
        <br />
        <input
          type="text"
          placeholder="Semester Number"
          value={semesterNum}
          onChange={(e) => setSemesterNum(e.target.value)}
          style={{borderRadius:'10px', height:'40px'}}
        />
        <br />
        <button style={{ margin:'auto' }} type="submit">Search</button>
        {showError && (
          <p style={{ color: "red" }}>Please enter a search term</p>
        )}
      </form>
      {searchResults.map((result) => (
        <div key={result.id} style={{color:'white'}}>
          <br />
          <br />
          <h2>{result.student__name}</h2>
          <p>Roll Number: {result.student__roll_num}</p>
          <p>Phone: {result.student__phone_number}</p>
          <p>CGPA: {result.cgpa}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentDetails;
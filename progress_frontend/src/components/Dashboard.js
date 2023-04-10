import React, { useState } from "react";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleStudentSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setShowError(true);
      return;
    }
    try {
      const response = await fetch(`http://localhost:8000/api/search/?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      setShowError(false);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontSize:'14px'}}>
      <h1 style={{color:'white'}}>Student Details</h1>
      <form onSubmit={handleStudentSearch}>
        <input
          type="text"
          placeholder="Search by Roll Number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        {showError && (
          <p style={{ color: "red" }}>Please enter a search term</p>
        )}
      </form>
      {searchResults.map((result) => (
        <div key={result.id} style={{color:'white'}}>
          <h2>{result.name}</h2>
          <p>Roll Number: {result.roll_num}</p>
          <p>Phone: {result.phone_number}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
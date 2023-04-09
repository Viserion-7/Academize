import React, { useState } from "react";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/search/?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{color:'white'}}>Student Dashboard</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h2>{result.name}</h2>
          <p>ID: {result.id}</p>
          <p>Roll Number: {result.roll_num}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
import React, { useState, useEffect } from "react";

const SelectStudent = ({ onValueChange }) => {
  const handleChange = async (e) => {
    onValueChange(e.target.value);
  };

  const [studentList, setStudentList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/teacher/`);
        console.log("SelectStudent");
        const data = await response.json();
        data.map((teacher) => {
          if (teacher["username"] === "teacher1") {
            console.log(teacher["students"]);
            setStudentList(teacher["students"]);
          }
        });
      } catch (error) {
        console.log("SelectStudentError");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <select
      onChange={handleChange}
      className="studentSelect"
      style={{
        padding: "10px",
        borderRadius: "100px",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <option value="0">Select Student</option>

      {studentList &&
        studentList.map((student) => (
          <option value="AM.EN.U4AIE22150" key={student["roll_num"]}>
            {student["name"]} - {student["roll_num"]}
          </option>
        ))}
    </select>
  );
};

export default SelectStudent;

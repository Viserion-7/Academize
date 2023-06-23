import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import  ThreeColumnLayout from "./Footer.js";

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  height: 100vh;
  color: black;
`;

const Title = styled.h1`
  margin-top: 10rem;
  font-size: 9.5rem;
  // position: absolute;
  // bottom: 60%;
  // display: flex;
  // justify-content: center;
  color: #000;
  z-index: 50;
`;

const Button = styled(Link)`
  background-color: #fff;
  color: #000;
  border: 1px solid #2e2e2e;
  border-radius: 10rem;
  font-size: 2rem;
  padding: 1rem 2rem;
  text-decoration: none;
  // margin-top: 2rem;
  max-height: 5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
  }
`;

function Home() {
  return (
    <Container>
      {/* <div className='overlay'></div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title>Welcome to AcademiZe</Title>
        <div
          style={{
            fontSize: "25px",
            fontWeight: "300",
            marginLeft: "20%",
          }}
        >
          where you can track your students' progress easily and efficiently.
        </div>
      </div>
      <div
        style={{
          marginTop: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          maxWidth: "70%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "white",
            // padding: "50px",
            // borderRadius: "30px",
          }}
        >
          <div style={{ maxWidth: "50%" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "500",
                justifyContent: "left",
              }}
            >
              Use this website to upgrade your teaching experience!
            </p>
            <p
              style={{ marginTop: "50px", fontSize: "25px", fontWeight: "350" }}
            >
              This website aims to help the teachers and all the other
              instructional faculty with managing their students' performance
              and enrich their teaching experience.
            </p>
            <p
              style={{ marginTop: "20px", fontSize: "25px", fontWeight: "350" }}
            >
              This website is enabled with magnificent features for managing
              your students and their grades, all with simple steps!
            </p>
          </div>
          <img
            style={{ justifyContent: "right", height: "400px" }}
            src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/9/9/2/507992_gettyimages548929129_199395_crop.jpg"
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          maxWidth: "70%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "30px",
          }}
        >
          <div style={{ maxWidth: "50%" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "500",
                justifyContent: "left",
              }}
            >
              Get started with managing your own list of students!
            </p>
            <p
              style={{ marginTop: "50px", fontSize: "25px", fontWeight: "350" }}
            >
              Create or update your students list by uploading a single file!
            </p>
            <p
              style={{ marginTop: "10px", fontSize: "25px", fontWeight: "350" }}
            >
              View and manage your list of students and analyze their
              performance.
            </p>
          </div>
          <Button to="/addStudents">Manage Students</Button>
        </div>
      </div>
      <div
        style={{
          marginTop: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          maxWidth: "70%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "30px",
          }}
        >
          <div style={{ maxWidth: "50%" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "500",
                justifyContent: "left",
              }}
            >
              Upload your students' marks in a single click!
            </p>
            <p
              style={{ marginTop: "50px", fontSize: "25px", fontWeight: "350" }}
            >
              Once again, all it takes, is ONE file to upload all your students'
              marks!
            </p>
          </div>
          <Button to="/add">Upload</Button>
        </div>
      </div>
      <div
        id="analyze"
        style={{
          marginTop: "100px",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          maxWidth: "70%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: "50px",
            borderRadius: "30px",
          }}
        >
          <div style={{ maxWidth: "50%" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "500",
                justifyContent: "left",
              }}
            >
              Analyze your students' performance!
            </p>
            <p
              style={{ marginTop: "50px", fontSize: "25px", fontWeight: "350" }}
            >
              Fetch your student's data by their roll number and analyze their
              performance using illustrative charts and designs!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <Button to="/student" style={{ marginRight: "2rem" }}>
              Get GPA
            </Button>
            <Button to="/marks">Get Marks</Button>
          </div>
        </div>
      </div>
      <div style={{ minHeight: "200px" }} />
      <ThreeColumnLayout />
    </Container>
    
  );
}

export default Home;

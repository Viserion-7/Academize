import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  font-size: 8.5rem;
  // position: absolute;
  // bottom: 60%;
  display: flex;
  justify-content: center;
  color: #000;
  z-index: 50;
`;

const Button = styled(Link)`
  background-color: #2e2e2e;
  color: #fff;
  border: 1px solid #2e2e2e;
  border-radius: 10rem;
  font-size: 2rem;
  padding: 1rem 2rem;
  text-decoration: none;
  // margin-top: 2rem;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

function Home() {
  return (
    <Container>
      {/* <div className='overlay'></div> */}
      <Title>Welcome to AcademiZe</Title>
      <div style={{ fontSize:"20px", fontWeight: "300", display: "flex", justifyContent: "center"}}>where you can track your students progress easily and efficiently.</div>
      <div style={{marginTop: "200px" ,marginLeft: "auto",marginRight: "auto", justifyContent: "center", maxWidth: "70%" }}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{maxWidth: "50%"}}>
          <p style={{fontSize: "30px", fontWeight: "500", justifyContent: "left"}}>Use this website to upgrade your teaching experience!</p>
          <p style={{marginTop: "50px" ,fontSize: "25px", fontWeight: "350"}}>This website is enabled with magnificent features for managing your students and their grades, all with simple steps!</p>
          </div>
          <img style={{justifyContent: "right"}} src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/9/9/2/507992_gettyimages548929129_199395_crop.jpg" />
        </div>
      </div>
      {/* <div style={{marginTop: "5%", marginLeft: "auto", marginRight: "auto", justifyContent: "center", display: "flex" }}>
        <Button to="/student">Get GPA</Button>
        <Button to="/marks">Get Marks</Button>
      </div> */}
    </Container>
  );
}

export default Home;
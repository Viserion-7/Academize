import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // background-color: #f5f5f5;
  background-image: url('./components/assets/wallpaper_full.jpg');
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #555;
`;

const Button = styled(Link)`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  text-decoration: none;
  margin-top: 2rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin-top: 3rem;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  color: #000;
`;

const IconLabel = styled.span`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #555;
`;

function Home() {
  return (
    <Container>
      <Title>Welcome to Earth's #1 Academic Analyzer</Title>
      <span>
        <Button to="/student">Get GPA</Button>
        <> </>
        <Button to="/marks">Get Marks</Button>
      </span>
      <IconContainer>
        <Icon>
          <FontAwesomeIcon icon={faGraduationCap} />
          <IconLabel>Education</IconLabel>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faBook} />
          <IconLabel>Reading</IconLabel>
        </Icon>
      </IconContainer>
    </Container>
  );
}

export default Home;
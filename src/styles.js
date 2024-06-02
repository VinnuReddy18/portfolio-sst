// src/styles.js
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212;
  color: white;
  padding: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Subheading = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const Nav = styled.nav`
  background: #333;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: #fda085;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://source.unsplash.com/random/1600x900') no-repeat center center/cover;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  position: relative;
  overflow: hidden;
`;

export const AboutOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const AboutContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  animation: fadeIn 2s ease-in-out;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AnimatedHeading = styled(Heading)`
  font-size: 3rem;
  animation: ${fadeIn} 1.5s ease-in-out;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%);
  color: #333;
  padding: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectDetails = styled.div`
  padding: 20px;
  text-align: left;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
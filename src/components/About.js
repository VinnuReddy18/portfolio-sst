// src/components/About.js
import React from 'react';
import { AboutContainer, AboutOverlay, AboutContent, AnimatedHeading, Paragraph } from '../styles';

const About = () => (
  <AboutContainer>
    <AboutOverlay />
    <AboutContent>
      <AnimatedHeading>About Me</AnimatedHeading>
      <Paragraph>Hi, I'm Vinay Reddy.</Paragraph>
      <Paragraph>I completed my 10th and 12th grades in Hyderabad.</Paragraph>
      <Paragraph>Currently, I am a student at Scaler School of Technology, working on an AI project named ScalerSage.</Paragraph>
      <Paragraph>I have also developed basic web applications as part of my learning and experience.</Paragraph>
    </AboutContent>
  </AboutContainer>
);

export default About;

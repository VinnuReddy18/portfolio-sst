// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { HomeContainer, Heading, Subheading } from '../styles';

const Home = () => (
  <HomeContainer>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading>Hello, I'm Vinay Reddy</Heading>
      <Subheading>Web Developer & Passionate Problem Solver</Subheading>
    </motion.div>
  </HomeContainer>
);

export default Home;

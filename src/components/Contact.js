// src/components/Contact.js
import React from 'react';
import {
  ContactContainer,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
} from '../styles';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea id="message" name="message" rows="5" required />
        </FormGroup>
        <FormButton type="submit">Send Message</FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;

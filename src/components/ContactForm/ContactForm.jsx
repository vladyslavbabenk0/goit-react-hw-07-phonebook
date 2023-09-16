import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, SubmitButton } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContactsThunk } from '../redux/contactsThunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContactsThunk({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          value={name}
          onChange={evt => setName(evt.target.value)}
          required
          placeholder="Michael Jordan"
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          value={number}
          onChange={evt => setNumber(evt.target.value)}
          required
          placeholder="+380 000 000 000"
        />
      </Label>
      <SubmitButton type="submit">Add Contact</SubmitButton>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, DeleteButton } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { delContactsThunk } from '../redux/contactsThunk';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => dispatch(delContactsThunk(contact.id))}>
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

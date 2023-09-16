import { useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delContactsThunk, fetchContactsThunk } from '../redux/contactsThunk';
import { setFilter } from '../redux/filterSlice';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import {
  Container,
  Wrapper,
  Title,
  SubTitle,
} from './App.styled';

const App = () => {


  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch(delContactsThunk(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
        <Container>
          <Title>
            Phone book
          </Title>
          <ContactForm />
          <SubTitle>Contacts</SubTitle>
          {contacts.length > 0 ? (
            <Filter value={filter} onChangeFilter={handleFilterChange} />
          ) : (
            <Wrapper>Your phonebook is empty. Add the first contact!</Wrapper>
          )}
          {contacts.length > 0 && (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          )}
        </Container>
    </div>
  );
};

export default App;

import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Notification from './Notification';

const App = () => {
  const contacts = useSelector(getContacts);
  const isContacts = Boolean(contacts.length);

  return (
    <div className={css.phonebookContainer}>
      <h1 className={css.titlePhonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleContacts}>Contacts</h2>
      <div className={css.allContacts}>All contacts: {contacts.length}</div>

      {isContacts ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </div>
  );
};

export default App;

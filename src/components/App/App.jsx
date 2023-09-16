import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(10),
      name: name,
      number: number,
    };

    if (contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in your contacts.`);
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const handleDelete = (deleteID) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== deleteID)
    );
  };

  const handleFilterChange = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <header className={css.header}>
          <h1 className={css.phonebookTitle}>Phonebook</h1>
          <ContactForm onSubmit={addNewContact} />
        </header>
        <section className={css.contactsSection}>
          <h2 className={css.contactListTitle}>Contacts</h2>
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
          <ContactList contactList={visibleContacts} handleDelete={handleDelete} />
        </section>
      </div>
    </div>
  );
};

export default App;
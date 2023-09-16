import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const isNameAdded = contacts.some(
      (contact) => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    const isNumberAdded = contacts.some(
      (contact) => contact.number === formData.number
    );

    if (isNameAdded) {
      Notify.failure(`${formData.name} is already in contacts`);
    } else if (isNumberAdded) {
      Notify.failure(`${formData.number} is already in contacts`);
    } else {
      onAddContact(formData);
      setFormData({ name: '', number: '' });
    }
  };

  const onAddContact = ({ name, number }) => {
    const action = addContact({ name, number });
    dispatch(action);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.inputName}
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Michael Jordan"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.inputNumber}
          value={formData.number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+380 000 000 000"
        />
      </label>
      <button className={css.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

import Form from './Form';
// import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, filtered } from '../redux/store.js';
const AddContacts = () => {
  const contacts = useSelector(state => state.allContacts);
  const filter = useSelector(state => state.filterContacts);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     dispatch(save(parsedContacts));
  //   }
  // }, [dispatch]);
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const filterInputId = nanoid();
  const formSubmitHandler = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        name,
        number,
        id: nanoid(),
      };
      dispatch(add(contact));
    }
  };
  const handleFilter = event => {
    dispatch(filtered(event.currentTarget.value));
    console.log(event.currentTarget.value);
  };
  const getFilterName = () => {
    console.log(contacts);
    console.log(Object.values(filter).join(''));
    const normalizedFilter = filter.toLowerCase();
    return Object.values(contacts).filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const handleDelContact = contactId => {
    dispatch(remove(contactId));
  };
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2 className="title">Contacts</h2>
      <Filter
        htmlFor={filterInputId}
        onChange={handleFilter}
        value={filter}
        id={filterInputId}
      />

      <ContactsList
        contacts={getFilterName()}
        onDelContact={handleDelContact}
      />
    </>
  );
};
export default AddContacts;

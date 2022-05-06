// import Form from './Form';
// import React, { useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import ContactsList from './ContactsList';
// import Filter from './Filter';
// import { useSelector, useDispatch } from 'react-redux';
// import { add, remove, filtered } from '../redux/store.js';
// const AddContacts = () => {
//   const contacts = useSelector(state => state.allContacts);
//   const filter = useSelector(state => state.filterContacts);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // const contacts = localStorage.getItem('contacts');
//     // console.log(contacts);
//     // const parsedContacts = JSON.parse(contacts);
//     // console.log(parsedContacts);
//     // setContacts(parsedContacts);

//     // const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       dispatch(add(parsedContacts));
//     }
//   }, [dispatch, contacts]);
//   // useEffect(() => {
//   //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   // }, [contacts]);

//   const filterInputId = nanoid();
//   const formSubmitHandler = (name, number) => {
//     const parsedContacts = JSON.parse(contacts);
//     if (
//       parsedContacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       const contact = {
//         name,
//         number,
//         id: nanoid(),
//       };
//       dispatch(add(contact));
//     }
//   };
//   const handleFilter = event => {
//     dispatch(filtered(event.currentTarget.value));
//     console.log(event.currentTarget.value);
//   };
//   const getFilterName = () => {
//     console.log(contacts);
//     // console.log(Object.values(filter).join(''));
//     console.log(JSON.parse(contacts));
//     const normalizedFilter = filter.toLowerCase();
//     return Object.values(contacts).filter(contact => {
//       return contact.name.toLowerCase().includes(normalizedFilter);
//     });
//   };

//   const handleDelContact = contactId => {
//     dispatch(remove(contactId));
//   };
//   return (
//     <>
//       <h1 className="title">Phonebook</h1>
//       <Form onSubmit={formSubmitHandler} />
//       <h2 className="title">Contacts</h2>
//       <Filter
//         htmlFor={filterInputId}
//         onChange={handleFilter}
//         value={filter}
//         id={filterInputId}
//       />

//       <ContactsList
//         contacts={getFilterName()}
//         onDelContact={handleDelContact}
//       />
//     </>
//   );
// };
// export default AddContacts;

import Form from './Form';
// import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/contactsSlice';
import { filtered } from '../redux/filterSlice';

const AddContacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');
  // useEffect(() => {
  // const contacts = localStorage.getItem('contacts');
  // console.log(contacts);
  // const parsedContacts = JSON.parse(contacts);
  // console.log(parsedContacts);
  // dispatch(add(parsedContacts));
  // }, [dispatch]);
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  //   console.log(contacts);
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
  };
  const getFilterName = () => {
    // const stringContacts = JSON.stringify(contacts);
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
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

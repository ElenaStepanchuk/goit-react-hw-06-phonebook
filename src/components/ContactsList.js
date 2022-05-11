import React from 'react';
import ContactListItem from './ContactListItem';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/contactsSlice';
// import { useSelector } from 'react-redux';
const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  // const getFilterName = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return Object.values(contacts).filter(contact => {
  //     if (contact.name)
  //       return contact.name.toLowerCase().includes(normalizedFilter);
  //   });
  // };
  const handleDelContact = contactId => {
    dispatch(remove(contactId));
  };
  return (
    <ul className={css.contact__list}>
      {Object.values(contacts).map(({ id, name, number }) => (
        <li className={css.contact__item} key={id}>
          <ContactListItem
            // contacts={getFilterName()}
            id={id}
            name={name}
            number={number}
            onDelContact={handleDelContact}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactsList;
ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

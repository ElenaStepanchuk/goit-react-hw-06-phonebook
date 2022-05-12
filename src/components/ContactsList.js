import React from 'react';
import ContactListItem from './ContactListItem';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/contactsSlice';
const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const handleDelContact = contactId => {
    dispatch(remove(contactId));
  };
  return (
    <ul className={css.contact__list}>
      {Object.values(contacts)
        .filter(contact => {
          if (contact.name)
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(({ id, name, number }) => (
          <li className={css.contact__item} key={id}>
            <ContactListItem
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

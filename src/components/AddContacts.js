import Form from './Form';
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
  const filterInputId = nanoid();
  const formSubmitHandler = (name, number) => {
    const normalizedName = name.toLowerCase();
    const addContacts = Object.values(contacts).find(contact => {
      if (contact.name)
        return contact.name.toLowerCase().includes(normalizedName);
    });
    if (addContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(add({ id: nanoid(), name, number }));
  };
  const handleFilter = event => {
    dispatch(filtered(event.currentTarget.value));
  };
  const getFilterName = () => {
    const normalizedFilter = filter.toLowerCase();
    return Object.values(contacts).filter(contact => {
      if (contact.name)
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
      <Filter htmlFor={filterInputId} onChange={handleFilter} />
      <ContactsList
        contacts={getFilterName()}
        onDelContact={handleDelContact}
      />
    </>
  );
};
export default AddContacts;

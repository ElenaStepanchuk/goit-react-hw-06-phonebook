import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
const AddContacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const getFilterName = () => {
    const normalizedFilter = filter.toLowerCase();
    return Object.values(contacts).filter(contact => {
      if (contact.name)
        return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsList contacts={getFilterName()} />
      {/* <ContactsList /> */}
    </>
  );
};
export default AddContacts;

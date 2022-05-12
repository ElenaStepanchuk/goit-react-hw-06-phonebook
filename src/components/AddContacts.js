import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
const AddContacts = () => {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
export default AddContacts;

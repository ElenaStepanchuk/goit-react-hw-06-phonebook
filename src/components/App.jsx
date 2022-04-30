import css from './App.module.css';
import React from 'react';
import AddContacts from './AddContacts';
export const App = () => {
  return (
    <div className={css.App}>
      <AddContacts />
    </div>
  );
};

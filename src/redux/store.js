import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
export const save = createAction('contacts/save');
export const add = createAction('contacts/add');
// console.log(add());
export const remove = createAction('contacts/remove');
export const filtered = createAction('contacts/filter');
const contactReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [save]: (_, action) => action.payload,
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  }
);
const filterReducer = createReducer('', {
  [filtered]: (_, action) => action.payload,
});
export const store = configureStore({
  reducer: {
    allContacts: contactReducer,
    filterContacts: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

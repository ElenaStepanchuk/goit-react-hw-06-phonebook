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
import { contactsSlice } from './slice';
export const filtered = createAction('contacts/filter');
const filterReducer = createReducer('', {
  [filtered]: (_, action) => action.payload,
});
export const store = configureStore({
  reducer: {
    allContacts: contactsSlice.reducer,
    filterContacts: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const { save, add, remove } = contactsSlice.actions;
export const persistor = persistStore(store);

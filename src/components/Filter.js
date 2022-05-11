import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { filtered } from '../redux/filterSlice';
const Filter = () => {
  const value = useSelector(state => state.filter);
  const id = nanoid();
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(filtered(event.currentTarget.value));
  };
  return (
    <label className={css.filter__label} htmlFor={id}>
      Find contacts by name &nbsp;
      <input
        htmlFor={filterInputId}
        className={css.filter__input}
        onChange={handleFilter}
        value={value}
        type="text"
        name="filter"
        title="Enter name"
        required
        id={id}
      />
    </label>
  );
};
export default Filter;
Filter.protoType = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

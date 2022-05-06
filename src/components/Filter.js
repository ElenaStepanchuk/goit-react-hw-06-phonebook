import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
const Filter = ({ onChange }) => {
  const value = useSelector(state => state.filter);
  const id = nanoid();
  return (
    <label className={css.filter__label} htmlFor={id}>
      Find contacts by name &nbsp;
      <input
        className={css.filter__input}
        onChange={onChange}
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

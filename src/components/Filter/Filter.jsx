import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (evt) => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <div className={css.filter}>
      <label className={css.labelFilter}>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;

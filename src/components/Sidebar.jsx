import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/services/countries/actions';

const Sidebar = () => {
  const { filter } = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(actions.filterAction(e.target.value));
  };

  return (
    <>
      <TextField
        placeholder='Filter countries'
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
};

export default Sidebar;

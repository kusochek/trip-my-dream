import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { countries } from '../../../api/countries/countries';

const fetchCountries = createAsyncThunk(`${moduleName}/fetchCountries`, async (continent) => {
  const response = countries.get(continent);
  return response;
});

export default {
  fetchCountries,
};

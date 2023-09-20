import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  countries: [],
  filter: '',
  filteredCountries: [],
};

export const countriesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = payload;
      // eslint-disable-next-line no-param-reassign
      state.filteredCountries = state.countries.filter((country) => {
        const countryIntial = country.country.toLowerCase();
        return countryIntial.indexOf(payload.toLowerCase()) !== -1;
      });
    });
    builder.addCase(thunks.fetchCountries.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.countries = payload;
    });
  },
});

export default countriesReducer.reducer;

// eslint-disable-next-line default-param-last
// function countriesReducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case COUNTRIES_FILTER:
//       return { ...state, filter: payload };
//     default:
//       return state;
//   }
// }

// export default countriesReducer;

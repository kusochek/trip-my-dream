import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterAction = createAction(`${moduleName}/filterAction`, (payload) => ({ payload }));

export default {
  filterAction,
};

// export const COUNTRIES_FILTER = 'COUNTRIES_FILTER';
// export const filterAction = (payload) => ({ type: COUNTRIES_FILTER, payload });

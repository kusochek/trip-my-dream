import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { countriesReducer } from './services/countries';

const rootReducer = combineReducers({
  countriesReducer,
});

const store = configureStore({ reducer: rootReducer });
// const store = createStore(reducer, initialState);

export default store;

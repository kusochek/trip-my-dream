import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Continents from '../../pages/continents/Continents';
import NotFound from '../NotFound/NotFound';
import Countries from '../../pages/countries/Countries';

export default function ContinentRoutes() {
  return (
    <Routes>
      <Route path='/*' element={<NotFound />} />
      <Route path='/' element={<Continents />} />
      <Route path='/continent/:continent' element={<Countries />} />
    </Routes>
  );
}

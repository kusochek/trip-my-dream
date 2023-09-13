import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './components/Templates/Template';
import ContinentRoutes from './components/Routes/ContinentRoutes';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route path='/' element={<h1>Hello!!!</h1>} />
        <Route element={<Template />}>
          <Route path='/tripMyDream/*' element={<ContinentRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

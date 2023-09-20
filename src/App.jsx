import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Template from './components/Templates/Template';
import ContinentRoutes from './components/Routes/ContinentRoutes';
import NotFound from './components/NotFound/NotFound';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NotFound />} />
          <Route path='/' element={<h1>Hello!!!</h1>} />
          <Route element={<Template />}>
            <Route path='/tripMyDream/*' element={<ContinentRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

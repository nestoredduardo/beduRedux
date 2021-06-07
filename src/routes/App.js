import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Table from '../pages/Table';

const App = () => {
  <BrowserRouter>
    <Route exact path='/' component={Table} />
  </BrowserRouter>;
};

export default App;

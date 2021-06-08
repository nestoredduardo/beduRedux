import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Table from '../pages/Table';

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path='/' component={Table} />
        </Switch>
      </Header>
    </BrowserRouter>
  );
};

export default App;

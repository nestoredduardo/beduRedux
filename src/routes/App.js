import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Table from '../pages/Table';
import Publications from '../pages/Publications';

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path='/' component={Table} />
          <Route exact path='/publications/:key' component={Publications} />
        </Switch>
      </Header>
    </BrowserRouter>
  );
};

export default App;

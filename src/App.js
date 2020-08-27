import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Back from './pages/Back';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/back" component={Back} />
        </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;

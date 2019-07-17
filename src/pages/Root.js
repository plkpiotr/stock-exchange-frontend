import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'templates/Main';
import Dashboard from './Dashboard';
import Quotes from './Quotes';
import Indicators from './Indicators';
import Transactions from './Transactions';
import Articles from './Articles';
import Notes from './Notes';
import Logout from './Logout';

const Root = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/indicators" component={Indicators} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/articles" component={Articles} />
        <Route path="/notes" component={Notes} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  </Main>
);

export default Root;

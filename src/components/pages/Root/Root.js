import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'components/templates/Main/Main';
import Dashboard from '../Dashboard/Dashboard';
import Quotes from '../Quotes/Quotes';
import Indicators from '../Indicators/Indicators';
import Transactions from '../Transactions/Transactions';
import Articles from '../Articles/Articles';
import Notes from '../Notes/Notes';
import Logout from '../Logout/Logout';

const Root = () => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/indicators" component={Indicators} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/articles" component={Articles} />
        <Route path="/notes" component={Notes} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Main>
  </BrowserRouter>
);

export default Root;

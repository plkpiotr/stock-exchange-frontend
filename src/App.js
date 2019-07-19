import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'components/templates/Main/Main';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Quotes from './components/pages/Quotes/Quotes';
import Indicators from './components/pages/Indicators/Indicators';
import Transactions from './components/pages/Transactions/Transactions';
import Articles from './components/pages/Articles/Articles';
import Notes from './components/pages/Notes/Notes';
import Logout from './components/pages/Logout/Logout';

const App = () => (
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

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'components/templates/Main/Main';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Quotes from './components/pages/Quotes/Quotes';
import Indicators from './components/pages/Indicators/Indicators';
import Transactions from './components/pages/Transactions/Transactions';
import Articles from './components/pages/Articles/Articles';
import Article from './components/pages/Article/Article';
import Notes from './components/pages/Notes/Notes';
import Note from './components/pages/Note/Note';
import Logout from './components/pages/Logout/Logout';

const App = () => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/indicators" component={Indicators} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={Article} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/notes/:id" component={Note} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </Main>
  </BrowserRouter>
);

export default App;

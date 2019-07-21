import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Main from 'components/templates/Main/Main';
import routes from 'routes/routes';
import store from 'store/store';
import Dashboard from 'components/pages/Dashboard/Dashboard';
import Quotes from 'components/pages/Quotes/Quotes';
import Indicators from 'components/pages/Indicators/Indicators';
import Transactions from 'components/pages/Transactions/Transactions';
import Articles from 'components/pages/Articles/Articles';
import Article from 'components/pages/Article/Article';
import Notes from 'components/pages/Notes/Notes';
import Note from 'components/pages/Note/Note';
import Logout from 'components/pages/Logout/Logout';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to={routes.articles} />} />
          <Route exact path={routes.login} render={() => <Redirect to={routes.articles} />} />
          <Route exact path={routes.register} render={() => <Redirect to={routes.articles} />} />
          <Route exact path={routes.dashboard} component={Dashboard} />
          <Route exact path={routes.quotes} component={Quotes} />
          <Route exact path={routes.indicators} component={Indicators} />
          <Route exact path={routes.transactions} component={Transactions} />
          <Route exact path={routes.articles} component={Articles} />
          <Route exact path={routes.article} component={Article} />
          <Route exact path={routes.notes} component={Notes} />
          <Route exact path={routes.note} component={Note} />
          <Route exact path={routes.logout} component={Logout} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>
);

export default App;

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Main from 'components/templates/Main';
import routes from 'constants/routes';
import store from 'store/store';
import Quotes from 'components/pages/Quotes';
import Indicators from 'components/pages/Indicators';
import Transactions from 'components/pages/Transactions';
import Articles from 'components/pages/Articles';
import Article from 'components/pages/Article';
import Notes from 'components/pages/Notes';
import Note from 'components/pages/Note';
import Login from 'components/pages/Login';
import Register from 'components/pages/Register';
import NotFound from 'components/pages/NotFound';
import Authenticator from 'utils/Authenticator';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path={routes.login} component={Login} />
          <Route exact path={routes.register} component={Register} />
          <Route exact path={routes.quotes} component={Authenticator(Quotes)} />
          <Route exact path={routes.indicators} component={Authenticator(Indicators)} />
          <Route exact path={routes.transactions} component={Authenticator(Transactions)} />
          <Route exact path={routes.articles} component={Authenticator(Articles)} />
          <Route exact path={routes.article} component={Authenticator(Article)} />
          <Route exact path={routes.notes} component={Authenticator(Notes)} />
          <Route exact path={routes.note} component={Authenticator(Note)} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>
);

export default App;

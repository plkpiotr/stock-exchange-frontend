import React from 'react';
import ReactDOM from 'react-dom';
import { checkAuthorization } from 'utils/token';
import App from './App';
import * as serviceWorker from './serviceWorker';

checkAuthorization();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

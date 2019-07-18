import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/pages/Root/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();

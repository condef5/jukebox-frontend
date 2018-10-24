import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';
import App from './components/App';
import Reproductor from './components/Reproductor';

import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
const isReproductor = location.href.indexOf('?reproductor') !== -1;

if (isReproductor) {
  ReactDOM.render(<Reproductor />, document.getElementById('root'));
} else {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  );
}

serviceWorker.unregister();

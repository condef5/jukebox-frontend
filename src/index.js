import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';
import App from './components/App';
import SecondScreen from './components/SecondScreen';

import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
const isReproductor = location.href.indexOf('?reproductor') !== -1;

if (isReproductor) {
  ReactDOM.render(<SecondScreen />, document.getElementById('root'));
} else {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  );
}

serviceWorker.unregister();

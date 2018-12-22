import React from 'react';
import cookie from 'cookie';
import { ApolloConsumer } from 'react-apollo';
import redirect from '../lib/redirect';

export default class Signout extends React.Component {
  signout = apolloClient => () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1 // Expire the cookie immediately
    });

    apolloClient.cache.reset().then(() => {
      redirect({}, '/login');
    });
  };

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <a href="#" onClick={this.signout(client)}>
            Sign out
          </a>
        )}
      </ApolloConsumer>
    );
  }
}

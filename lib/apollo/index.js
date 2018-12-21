import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import merge from 'lodash.merge';

import singers from './resolvers/singers';
import search from './resolvers/search';
import genders from './resolvers/genders';
import videoclips from './resolvers/videoclips';
import waitings from './resolvers/waitings';
import typeDefs from './typeDefs';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'https://v7mnw3m03.lp.gql.zone/graphql'
});

const stateLink = withClientState({
  ...merge(singers, genders, videoclips, waitings, search),
  cache,
  typeDefs
});

const link = ApolloLink.from([stateLink, httpLink]);

export default withApollo(
  () =>
    new ApolloClient({
      cache,
      link
    })
);

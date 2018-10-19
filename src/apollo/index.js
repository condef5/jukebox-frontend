import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { resolvers } from './resolvers';
import defaults from './defaults';
import typeDefs from './typeDefs';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'https://v7mnw3m03.lp.gql.zone/graphql'
});

const stateLink = withClientState({
  defaults,
  resolvers,
  cache,
  typeDefs
});

const link = ApolloLink.from([stateLink, httpLink]);

export const client = new ApolloClient({
  cache,
  link
});

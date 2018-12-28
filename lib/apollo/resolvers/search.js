// import gql from 'graphql-tag';

const search = {
  defaults: {
    search: ''
  },
  resolvers: {
    Mutation: {
      changeSearch: (_, { text }, { cache }) => {
        cache.writeData({ data: { search: text } });
        return null;
      }
    }
  }
};

export default search;

// import gql from 'graphql-tag';

const singers = {
  defaults: {
    selectedSinger: 1,
    selectedSingerSearch: 0
  },
  resolvers: {
    Mutation: {
      selectedSinger: (_, { id }, { cache }) => {
        cache.writeData({ data: { selectedSinger: id } });
        return null;
      },
      selectedSingerSearch: (_, { id }, { cache }) => {
        cache.writeData({ data: { selectedSingerSearch: id } });
        return null;
      }
    }
  }
};

export default singers;

// import gql from 'graphql-tag';

const genders = {
  defaults: {
    genderSelected: 1
  },
  resolvers: {
    Mutation: {
      selectedGender: (_, { id }, { cache }) => {
        cache.writeData({ data: { genderSelected: id } });
        return null;
      }
    }
  }
};

export default genders;

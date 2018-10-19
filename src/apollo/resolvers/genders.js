// import gql from 'graphql-tag';

const genders = {
  defaults: {
    genderSelected: 1,
    genders: [
      {
        id: 1,
        name: 'rock',
        __typename: 'GenderItem'
      },
      {
        id: 2,
        name: 'salsa',
        __typename: 'GenderItem'
      },
      {
        id: 3,
        name: 'electro',
        __typename: 'GenderItem'
      },
      {
        id: 4,
        name: 'cumbia',
        __typename: 'GenderItem'
      },
      {
        id: 5,
        name: 'tecno',
        __typename: 'GenderItem'
      },
      {
        id: 6,
        name: 'reggue',
        __typename: 'GenderItem'
      },
      {
        id: 7,
        name: 'bachata',
        __typename: 'GenderItem'
      },
      {
        id: 8,
        name: 'merengue',
        __typename: 'GenderItem'
      }
    ]
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

// import gql from 'graphql-tag';

const singers = {
  defaults: {
    selectedSinger: 1,
    selectedSingerSearch: 0,
    singers: [
      {
        id: 1,
        name: ' Linkin park',
        image:
          'https://direct.rhapsody.com/imageserver/images/Alb.54733637/500x500.jpg',
        gender_id: 1,
        __typename: 'SingerItem'
      },
      {
        id: 2,
        name: 'Daft punk',
        image: 'https://i.imgur.com/wvHSNh8.jpg',
        gender_id: 1,
        __typename: 'SingerItem'
      },
      {
        id: 3,
        name: 'Oasis',
        image: 'https://i.imgur.com/c3i2Sqt.jpg',
        gender_id: 3,
        __typename: 'SingerItem'
      },
      {
        id: 4,
        name: 'Phoenix',
        image: 'https://i.imgur.com/q2cIUFl.jpg',
        gender_id: 3,
        __typename: 'SingerItem'
      },
      {
        id: 5,
        name: 'Man with a mission',
        image: 'https://i.imgur.com/zuuyYk5.jpg',
        gender_id: 1,
        __typename: 'SingerItem'
      },
      {
        id: 6,
        name: 'Motorama',
        image: 'https://i.imgur.com/oMi8TEq.jpg',
        gender_id: 1,
        __typename: 'SingerItem'
      },
      {
        id: 7,
        name: 'Red hot chili peppers',
        image: 'https://i.imgur.com/mjz7gGC.jpg',
        gender_id: 1,
        __typename: 'SingerItem'
      },
      {
        id: 8,
        name: 'Asian kung-fu generation',
        image: 'https://i.imgur.com/qL7rkV7.png',
        gender_id: 1,
        __typename: 'SingerItem'
      },
      {
        id: 9,
        name: 'Hector Lavoe',
        image: 'https://i.imgur.com/R1DY5QV.jpg',
        gender_id: 2,
        __typename: 'SingerItem'
      },
      {
        id: 10,
        name: 'Maelo Ruiz',
        image: 'https://i.imgur.com/YRJcqHa.jpg',
        gender_id: 2,
        __typename: 'SingerItem'
      },
      {
        id: 11,
        name: 'Ruben blades',
        image: 'https://i.imgur.com/vWIBPd9.jpg',
        gender_id: 2,
        __typename: 'SingerItem'
      },
      {
        id: 12,
        name: 'Marck Antony',
        image: 'https://i.imgur.com/QG2zBWl.jpgs',
        gender_id: 2,
        __typename: 'SingerItem'
      },
      {
        id: 13,
        name: 'Nirvana',
        image:
          'http://fc03.deviantart.net/fs70/f/2012/051/8/f/nirvana_by_ucarts-d4qcjxb.jpg',
        gender_id: 1,
        __typename: 'SingerItem'
      },
      {
        id: 14,
        name: 'Artick Monkeys',
        image: 'https://i.imgur.com/YClBmxg.png',
        gender_id: 1,
        __typename: 'SingerItem'
      }
    ]
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

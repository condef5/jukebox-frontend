// import gql from 'graphql-tag';

const videoclips = {
  defaults: {
    videoclips: [
      {
        id: 1,
        name: 'In the end',
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
        __typename: 'VideoclipItem'
      },
      {
        id: 2,
        name: 'Numb',
        author: 'Linkin Park',
        url: 'https://youtu.be/kXYiU_JCYtU',
        __typename: 'VideoclipItem'
      },
      {
        id: 3,
        name: 'Leave out all the rest',
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=yZIummTz9mM',
        __typename: 'VideoclipItem'
      },
      {
        id: 4,
        name: 'Shadow in the dark',
        author: 'Linkin Park',
        url: 'https://youtu.be/i8q8fFs3kTM',
        __typename: 'VideoclipItem'
      },
      {
        id: 5,
        name: 'New divide',
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=ysSxxIqKNN0',
        __typename: 'VideoclipItem'
      },
      {
        id: 6,
        name: "What I've Done ",
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=8sgycukafqQ',
        __typename: 'VideoclipItem'
      },
      {
        id: 7,
        name: 'Breaking The Habit',
        author: 'Linkin Park',
        url: 'https://youtu.be/v2H4l9RpkwM',
        __typename: 'VideoclipItem'
      },
      {
        id: 8,
        name: 'Papercut',
        author: 'Linkid park',
        url: 'https://youtu.be/vjVkXlxsO8Q',
        __typename: 'VideoclipItem'
      },
      {
        id: 9,
        name: 'Burn It Down',
        author: 'Linkid park',
        url: 'https://youtu.be/dxytyRy-O1k',
        __typename: 'VideoclipItem'
      },
      {
        id: 10,
        name: 'Somewhere I Belong',
        author: 'Linkid park',
        url: 'https://youtu.be/4h3F6pb0CNc',
        __typename: 'VideoclipItem'
      }
    ]
  },
  resolvers: {
    Mutation: {
      addTodo: () => {}
    }
  }
};

export default videoclips;

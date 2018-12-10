import gql from 'graphql-tag';

const videoclips = {
  defaults: {
    videoclips: [
      {
        id: 1,
        name: 'In the end',
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 2,
        name: 'Numb',
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 3,
        name: 'Leave out all the rest',
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=yZIummTz9mM',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 4,
        name: 'Shadow in the dark',
        author: 'Linkin Park',
        url: 'https://youtu.be/i8q8fFs3kTM',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 5,
        name: 'New divide',
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=ysSxxIqKNN0',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 6,
        name: "What I've Done ",
        author: 'Linkin Park',
        url: 'https://www.youtube.com/watch?v=8sgycukafqQ',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 7,
        name: 'Breaking The Habit',
        author: 'Linkin Park',
        url: 'https://youtu.be/v2H4l9RpkwM',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 8,
        name: 'Papercut',
        author: 'Linkid park',
        url: 'https://youtu.be/vjVkXlxsO8Q',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 9,
        name: 'Burn It Down',
        author: 'Linkid park',
        url: 'https://youtu.be/dxytyRy-O1k',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 10,
        name: 'Somewhere I Belong',
        author: 'Linkid park',
        url: 'https://youtu.be/a8oDEY4yoR4',
        singer_id: 1,
        __typename: 'VideoclipItem'
      },
      {
        id: 11,
        name: 'Take me under',
        author: 'Man with a mission',
        url: 'https://youtu.be/4hSEZdezI44',
        singer_id: 5,
        __typename: 'VideoclipItem'
      },
      {
        id: 12,
        name: 'My hero',
        author: 'Man with a mission',
        url: 'https://youtu.be/yM6-QVxIXTs',
        singer_id: 5,
        __typename: 'VideoclipItem'
      },
      {
        id: 13,
        name: 'Dead End in Tokyo',
        author: 'Man with a mission',
        url: 'https://youtu.be/JjIiK9VcIsA',
        singer_id: 5,
        __typename: 'VideoclipItem'
      },
      {
        id: 14,
        name: 'Seven Deadly Sins',
        author: 'Man with a mission',
        url: 'https://youtu.be/2Vzksex5REE',
        singer_id: 5,
        __typename: 'VideoclipItem'
      },
      {
        id: 15,
        name: 'Wind in her hair',
        author: 'Motorama',
        url: 'https://youtu.be/Z8cmSEXOE0g',
        singer_id: 6,
        __typename: 'VideoclipItem'
      },
      {
        id: 16,
        name: 'Heavy Wave',
        author: 'Motorama',
        url: 'https://youtu.be/07FdNR6ikHI',
        singer_id: 6,
        __typename: 'VideoclipItem'
      },
      {
        id: 17,
        name: 'You & the others',
        author: 'Motorama',
        url: 'https://youtu.be/cAIwxhvUNVI',
        singer_id: 6,
        __typename: 'VideoclipItem'
      },
      {
        id: 18,
        name: 'Rose in the vase',
        author: 'Motorama',
        url: 'https://youtu.be/yepd-2cgyK8',
        singer_id: 6,
        __typename: 'VideoclipItem'
      },
      {
        id: 19,
        name: 'Instant Crush (Video) ft. Julian Casablancas',
        author: 'Daft Punk',
        url: 'https://youtu.be/a5uQMwRMHcs',
        singer_id: 2,
        __typename: 'VideoclipItem'
      },
      {
        id: 20,
        name: 'Within',
        author: 'Daft Punk',
        url: 'https://youtu.be/Q5l2ChAqRDg',
        singer_id: 2,
        __typename: 'VideoclipItem'
      },
      {
        id: 21,
        name: 'Veridis Quo',
        author: 'Daft Punk',
        url: 'https://youtu.be/ySLc8gZ3oEc',
        singer_id: 2,
        __typename: 'VideoclipItem'
      },
      {
        id: 22,
        name: 'By the way',
        author: 'Red hot chili peppers',
        url: 'https://youtu.be/YXdOAUKCc0k',
        singer_id: 7,
        __typename: 'VideoclipItem'
      },
      {
        id: 23,
        name: "Cant's stop",
        author: 'Red hot chili peppers',
        url: 'https://youtu.be/8DyziWtkfBw',
        singer_id: 7,
        __typename: 'VideoclipItem'
      },
      {
        id: 24,
        name: 'Under The Bridge',
        author: 'Red hot chili peppers',
        url: 'https://youtu.be/lwlogyj7nFE',
        singer_id: 7,
        __typename: 'VideoclipItem'
      },
      {
        id: 25,
        name: 'Rewrite',
        author: 'Asian kung-fu generation',
        url: 'https://youtu.be/a8oDEY4yoR4',
        singer_id: 8,
        __typename: 'VideoclipItem'
      },
      {
        id: 26,
        name: 'Haruka Kanata',
        author: 'Asian kung-fu generation',
        url: 'https://youtu.be/nJ6A6GC_ki4',
        singer_id: 8,
        __typename: 'VideoclipItem'
      },
      {
        id: 27,
        name: 'Loop & Loop',
        author: 'Asian kung-fu generation',
        url: 'https://youtu.be/F4l9qxtTbmM',
        singer_id: 8,
        __typename: 'VideoclipItem'
      },
      {
        id: 28,
        name: 'Re:Re',
        author: 'Asian kung-fu generation',
        url: 'https://www.youtube.com/watch?v=-AbZTFS3DAw',
        singer_id: 8,
        __typename: 'VideoclipItem'
      }
    ]
  },
  resolvers: {
    Mutation: {
      addVideo: (_, { id }, { cache }) => {
        const query = gql`
          query GetWaitings {
            waitings @client {
              video_id
              client
            }
          }
        `;
        const { waitings } = cache.readQuery({ query });
        const newWaiting = {
          video_id: id,
          client: 'normal',
          __typename: 'WaitingItem'
        };
        const data = {
          waitings: waitings.concat([newWaiting])
        };
        cache.writeData({ data });
        return null;
      }
    }
  }
};

export default videoclips;

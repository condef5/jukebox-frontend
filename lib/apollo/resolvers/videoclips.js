import gql from 'graphql-tag';

const videoclips = {
  defaults: {},
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

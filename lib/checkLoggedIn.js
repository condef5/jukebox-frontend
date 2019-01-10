import gql from 'graphql-tag';

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          me {
            id
            username
            email
          }
        }
      `
    })
    .then(({ data }) => ({ user: data.me }))
    .catch(() =>
      // Fail gracefully
      ({ user: null })
    );

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SingerList from '../components/SingerList';

const SINGERS_QUERY = gql`
  {
    singers @client {
      id
      name
      image
    }
  }
`;

const withSingers = graphql(SINGERS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { singers: [] };
    return {
      singers: data.singers
    };
  }
});

export default withSingers(SingerList);

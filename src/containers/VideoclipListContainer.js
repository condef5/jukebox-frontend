import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import VideoclipList from '../components/VideoclipList';

const VIDEOCLIPS_QUERY = gql`
  {
    videoclips @client {
      id
      name
      url
      author
    }
  }
`;

const withVideoclips = graphql(VIDEOCLIPS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { videoclips: [] };
    return {
      videoclips: data.videoclips
    };
  }
});

export default withVideoclips(VideoclipList);

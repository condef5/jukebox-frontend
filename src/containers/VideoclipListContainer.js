import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import VideoclipList from '../components/VideoclipList';

const filterSingers = (videoclips, singerId) =>
  videoclips.filter(videoclip => videoclip.singer_id === singerId);

const VIDEOCLIPS_QUERY = gql`
  {
    videoclips @client {
      id
      name
      url
      singer_id
      author
    }
    selectedSinger @client
  }
`;

const withVideoclips = graphql(VIDEOCLIPS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { videoclips: [] };
    console.log(data.selectedSinger);
    return {
      videoclips: filterSingers(data.videoclips, data.selectedSinger)
    };
  }
});

export default withVideoclips(VideoclipList);

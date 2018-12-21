import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import VideoclipList from '../App/VideoclipList';

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
    return {
      videoclips: filterSingers(data.videoclips, data.selectedSinger)
    };
  }
});

const WAITING_MUTATION = gql`
  mutation AddVideo($id: Int!) {
    addVideo(id: $id) @client
  }
`;

const addVideo = graphql(WAITING_MUTATION, {
  props: ({ mutate }) => ({
    onAddVideo: id => mutate({ variables: { id } })
  })
});

export default addVideo(withVideoclips(VideoclipList));

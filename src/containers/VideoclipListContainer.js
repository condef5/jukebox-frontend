import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import VideoclipList from '../components/VideoclipList';

const filterSingers = (videoclips, singerId, search) => {
  if (search === '') {
    return videoclips.filter(videoclip => videoclip.singer_id === singerId);
  }
  return videoclips.filter(
    videoclip =>
      videoclip.name.toLowerCase().indexOf(search) > -1 ||
      videoclip.author.toLowerCase().indexOf(search) > -1
  );
};

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
    search @client
  }
`;

const withVideoclips = graphql(VIDEOCLIPS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { videoclips: [] };
    return {
      videoclips: filterSingers(
        data.videoclips,
        data.selectedSinger,
        data.search.toLowerCase()
      )
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

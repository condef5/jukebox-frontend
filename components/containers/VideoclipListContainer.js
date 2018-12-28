import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import VideoclipList from '../App/VideoclipList';

const VIDEOCLIPS_QUERY = gql`
  {
    selectedSinger @client
  }
`;

const withVideoclips = graphql(VIDEOCLIPS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { selectedSinger: 1 };
    return {
      selectedSinger: parseInt(data.selectedSinger)
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

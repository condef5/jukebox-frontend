import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SingerList from '../components/SingerList';

const filterSingers = (singers, genderId) =>
  singers.filter(singer => singer.gender_id === genderId);

const SINGERS_QUERY = gql`
  {
    singers @client {
      id
      name
      image
      gender_id
    }
    genderSelected @client
  }
`;

const withSingers = graphql(SINGERS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { singers: [], loading: true };
    return {
      singers: filterSingers(data.singers, data.genderSelected)
    };
  }
});

const SINGER_MUTATION = gql`
  mutation SelectSinger($id: Int!) {
    selectedSinger(id: $id) @client
  }
`;

const selectedSinger = graphql(SINGER_MUTATION, {
  props: ({ mutate }) => ({
    onSingerClick: id => mutate({ variables: { id } })
  })
});

export default selectedSinger(withSingers(SingerList));

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SingerList from '../App/SingerList';

const SINGERS_QUERY = gql`
  {
    genderSelected @client
    search @client
  }
`;

const withSingers = graphql(SINGERS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { genderSelected: 2 };
    return {
      genderSelected: parseInt(data.genderSelected, 0)
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

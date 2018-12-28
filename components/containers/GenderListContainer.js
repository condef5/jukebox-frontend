import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import GenderList from '../App/GenderList';

const GENDERS_QUERY = gql`
  {
    genders {
      id
      name
    }
  }
`;

const withGenders = graphql(GENDERS_QUERY, {
  props: ({ data }) => {
    if (data.loading || data.error) return { genders: [] };
    return {
      genders: data.genders
    };
  }
});

const GENDER_MUTATION = gql`
  mutation SelectGender($id: Int!) {
    selectedGender(id: $id) @client
  }
`;

const selectedGender = graphql(GENDER_MUTATION, {
  props: ({ mutate }) => ({
    onGenderClick: id => mutate({ variables: { id } })
  })
});

export default selectedGender(withGenders(GenderList));

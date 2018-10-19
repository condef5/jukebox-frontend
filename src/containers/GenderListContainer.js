import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import GenderList from '../components/GenderList';

const GENDERS_QUERY = gql`
  {
    genders @client {
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

export default withGenders(GenderList);

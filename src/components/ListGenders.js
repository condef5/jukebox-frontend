import React from 'react';
import Swiper from 'react-id-swiper';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { StyleSwipper, StyleGenders } from './styles/ListGenders';

const GET_GENDERS = gql`
  {
    genders @client {
      id
      name
    }
  }
`;

const params = {
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 4,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 150,
    modifier: 1,
    slideShadows: false,
    shadow: false
  }
};

const ListGenders = ({ genders }) => (
  <StyleSwipper>
    <Swiper {...params}>
      {genders.map(item => (
        <StyleGenders key={item.id}>{item.name}</StyleGenders>
      ))}
    </Swiper>
  </StyleSwipper>
);

const WrapList = () => (
  <Query query={GET_GENDERS}>
    {({ data: { genders }, loading }) => {
      if (loading) {
        return <div>Loading ...</div>;
      }

      return <ListGenders genders={genders} />;
    }}
  </Query>
);

export default WrapList;

import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import StyleSwipper from './styles/ListSingers';

const GET_SINGERS = gql`
  {
    singers @client {
      id
      name
      image
    }
  }
`;

/* eslint-disable */
class Carrousel extends Component {
  render() {
    const { singers } = this.props;
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 3,
      loop: true,
      coverflowEffect: {
        rotate: 5,
        stretch: 1,
        depth: 400,
        modifier: 1,
        slideShadows: true
      }
    };

    return (
      <StyleSwipper>
        <Swiper {...params}>
          {singers.map(item => (
            <div className="contain">
              <img className="img-responsive" src={item.image} alt="title or description" />
            </div>
          ))}
        </Swiper>
      </StyleSwipper>
    );
  }
}

const WrapList = () => (
  <Query query={GET_SINGERS}>
    {({ data: { singers }, loading }) => {
      if (loading) {
        return <div>Loading ...</div>;
      }

      return <Carrousel singers={singers} />;
    }}
  </Query>
);

export default WrapList;

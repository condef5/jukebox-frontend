import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import StyleSwipper from './styles/ListSingers';

/* eslint-disable */
class SingerList extends Component {
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
            <div className="contain" key={item.id}>
              <img className="img-responsive" src={item.image} alt="title or description" />
            </div>
          ))}
        </Swiper>
      </StyleSwipper>
    );
  }
}

export default SingerList;

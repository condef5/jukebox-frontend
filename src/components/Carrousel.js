import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

/* eslint-disable */
const StyleSwipper = styled.div`
  .contain {
    text-align: center;
    border-radius: 5px;
  }
  .img-responsive {
    box-shadow: 1px 1px 15px rgba(255, 0, 0, 0.61), -1px -1px 15px rgba(255, 0, 0, 0.61),
      -1px 1px 15px rgba(255, 0, 0, 0.61), 1px -1px 15px rgba(255, 0, 0, 0.61);
    max-width: 250px;
    border-radius: 5px;
  }

  .swiper-slide-next {
    padding-top: 1em;
    transition: all 1s;
    cursor: pointer;
  }

  /* container slider */
  .swiper-container {
    width: 100%;
    margin: 0 auto;
  }
`;

const listImage = [
  'https://www.designformusic.com/wp-content/uploads/2016/05/sonic-creativity-album-cover-artwork.jpg',
  'https://www.designformusic.com/wp-content/uploads/2018/07/Digital-World-album-cover-design.jpg',
  'https://www.designformusic.com/wp-content/uploads/2017/07/Punked-and-Disorderly-punk-album-cover-500x500.jpg',
  'https://www.designformusic.com/wp-content/uploads/2017/07/hout-sauce-soundcheck-samples-500x500.jpg',
  'https://www.designformusic.com/wp-content/uploads/2017/07/Kidnap-halle-berry-movie-soundtrack-500x500.jpg',
  'https://www.designformusic.com/wp-content/uploads/2018/05/Anon-OST-500x500.jpg',
  'https://www.designformusic.com/wp-content/uploads/2016/05/sonic-creativity-album-cover-artwork.jpg',
  'https://www.designformusic.com/wp-content/uploads/2017/07/Punked-and-Disorderly-punk-album-cover-500x500.jpg',
  'https://www.designformusic.com/wp-content/uploads/2017/07/hout-sauce-soundcheck-samples-500x500.jpg',
  'https://www.designformusic.com/wp-content/uploads/2017/07/Kidnap-halle-berry-movie-soundtrack-500x500.jpg',
  'https://www.designformusic.com/wp-content/uploads/2018/05/Anon-OST-500x500.jpg'
];


class Carrousel extends Component {
  render() {
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
          {listImage.map(item => (
            <div className="contain">
              <img className="img-responsive" src={item} alt="title or description" />
            </div>
          ))}
        </Swiper>
      </StyleSwipper>
    );
  }
}

export default Carrousel;

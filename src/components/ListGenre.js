import React from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

const widthItem = '100px';
const heightItem = '35px';

const StyleSwipper = styled.div`
  .contain {
    text-align: center;
    border-radius: 5px;
  }

  /* container slider */
  .swiper-container {
    width: 400px;
    margin: 0 auto;
  }
`;

const StyleGenre = styled.div`
  background-color: rgba(255, 9, 9, 0.8);
  width: ${widthItem};
  height: ${heightItem};
  font-size: 14px;
  padding: 0.5em 1.5em;
  font-weight: 100;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  user-select: none;
  text-align: center;
  color: #fff;
  opacity: 0.95;
  box-shadow: 0 0 15px #ff2b2b78;
  border-radius: 4px;
  margin: 1em;
`;

const listGen = ['Rock', 'Salsa', 'Country', 'Pop', 'Cumbia', 'Soul'];

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

const ListGenre = () => (
  <StyleSwipper>
    <Swiper {...params}>
      {listGen.map(item => (
        <StyleGenre key={item}>{item}</StyleGenre>
      ))}
    </Swiper>
  </StyleSwipper>
);

export default ListGenre;

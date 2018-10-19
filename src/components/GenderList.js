import React from 'react';
import Swiper from 'react-id-swiper';
import { StyleSwipper, StyleGenders } from './styles/ListGenders';

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

const GenderList = ({ genders }) => (
  <StyleSwipper>
    <Swiper {...params}>
      {genders.map(item => (
        <StyleGenders key={item.id}>{item.name}</StyleGenders>
      ))}
    </Swiper>
  </StyleSwipper>
);

export default GenderList;

import React from 'react';
import Swiper from 'react-id-swiper';
import { StyleSwipper, StyleGenders } from './styles/GendersList';

const params = {
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 4,
  loop: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 5,
    stretch: 1,
    depth: 150,
    modifier: 1,
    slideShadows: false,
    shadow: false
  }
};

const GenderList = ({ genders, onGenderClick }) => (
  <StyleSwipper>
    <Swiper {...params}>
      {genders.map(item => (
        <StyleGenders key={item.id} onClick={() => onGenderClick(item.id)}>
          {item.name}
        </StyleGenders>
      ))}
    </Swiper>
  </StyleSwipper>
);

export default GenderList;

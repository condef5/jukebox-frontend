import React from 'react';
import Swiper from 'react-id-swiper';
import StyleSwipper from './styles/ListSingers';

const params = {
  effect: 'coverflow',
  clickable: true,
  grabCursor: true,
  slidesPerView: 3,
  loop: true,
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
  coverflowEffect: {
    rotate: 5,
    stretch: 1,
    depth: 500,
    modifier: 1,
    slideShadows: false
  }
};

const SingerList = ({ singers, onSingerClick }) => {
  if (singers.length === 0) return 'Loading...';
  return (
    <StyleSwipper>
      <Swiper {...params}>
        {singers.map(singer => (
          <div
            className="contain"
            key={singer.id}
            onClick={() => onSingerClick(singer.id)}
            role="presentation"
          >
            <img
              className="img-responsive"
              src={singer.image}
              alt="title or description"
            />
          </div>
        ))}
      </Swiper>
    </StyleSwipper>
  );
};

export default SingerList;

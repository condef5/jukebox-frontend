import React from 'react';
import Swiper from 'react-id-swiper';
import StyleSwipper from './styles/ListSingers';

const params = {
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 3,
  loop: true,
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
  coverflowEffect: {
    rotate: 5,
    stretch: 1,
    depth: 400,
    modifier: 1,
    slideShadows: true
  }
};

const CarrouselSinger = ({ singers }) => (
  <StyleSwipper>
    <Swiper {...params}>
      {singers.map(item => (
        <div className="contain" key={item.id}>
          <img
            className="img-responsive"
            src={item.image}
            alt="title or description"
          />
        </div>
      ))}
    </Swiper>
  </StyleSwipper>
);

const SingerList = ({ singers }) => {
  if (singers.length === 0) return 'Loading...';
  return <CarrouselSinger singers={singers} />;
};

export default SingerList;

import React from 'react';
import Swiper from 'react-id-swiper';
import StyleSwipper from './styles/SingerList';

const params = {
  effect: 'coverflow',
  clickable: true,
  grabCursor: true,
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
  navigation: {
    nextEl: '.swip-control.swiper-button-next',
    prevEl: '.swip-control.swiper-button-prev'
  },
  renderPrevButton: () => (
    <span className="icon-wrap swip-control swiper-button-prev">
      <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
        <use xlinkHref="#arrow-left-1" />
      </svg>
    </span>
  ),
  renderNextButton: () => (
    <span className="icon-wrap swip-control swiper-button-next">
      <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
        <use xlinkHref="#arrow-right-1" />
      </svg>
    </span>
  ),
  coverflowEffect: {
    rotate: 5,
    stretch: 1,
    depth: 500,
    modifier: 1,
    slideShadows: false
  }
};

const SvgIcons = () => (
  <div className="svg-wrap">
    <svg width="64" height="64" viewBox="0 0 64 64">
      <path
        id="arrow-left-1"
        d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z"
      />
    </svg>
    <svg width="64" height="64" viewBox="0 0 64 64">
      <path
        id="arrow-right-1"
        d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z"
      />
    </svg>
  </div>
);

const SingerList = ({ singers, onSingerClick }) => {
  if (singers.length === 0) return 'Loading...';
  return (
    <>
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
      <SvgIcons />
    </>
  );
};

export default SingerList;

import React from 'react';
import { Swiper, Slide } from 'react-dynamic-swiper';
import StyleSwipper from './styles/SingerList';

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

const MyPrevButton = () => (
  <span className="icon-wrap swip-control swiper-button-prev">
    <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
      <use xlinkHref="#arrow-left-1" />
    </svg>
  </span>
);

const MyNextButton = () => (
  <span className="icon-wrap swip-control swiper-button-next">
    <svg className="icon" width="32" height="32" viewBox="0 0 64 64">
      <use xlinkHref="#arrow-right-1" />
    </svg>
  </span>
);

const params = {
  effect: 'coverflow',
  clickable: true,
  grabCursor: true,
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
    nextEl: '.swip-control.swiper-button-next',
    prevEl: '.swip-control.swiper-button-prev'
  },
  coverflowEffect: {
    depth: 500,
    modifier: 1,
    rotate: 5,
    slideShadows: false,
    stretch: 1
  }
};

const SingerList = ({ singers, onSingerClick }) => {
  if (singers.length === 0) return 'Loading...';
  return (
    <>
      <StyleSwipper>
        <Swiper
          swiperOptions={params}
          pagination={false}
          nextButton={<MyNextButton />}
          prevButton={swiper => (
            <MyPrevButton onClick={() => swiper.slideNext()} />
          )}
        >
          {singers.map(singer => (
            <Slide key={singer.id} onActive={() => onSingerClick(singer.id)}>
              <div className="contain" role="presentation">
                <div className="column">
                  <img
                    className="img-responsive"
                    src={singer.image}
                    alt="title or description"
                  />
                </div>
              </div>
            </Slide>
          ))}
        </Swiper>
      </StyleSwipper>
      <SvgIcons />
    </>
  );
};
export default SingerList;

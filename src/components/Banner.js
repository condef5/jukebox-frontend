import React, { Component } from 'react';
import { Swiper, Slide } from 'react-dynamic-swiper';
import StyleBanner from './styles/Banner';

const params = {
  slidesPerView: 1,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  centeredSlides: true
};

const data = [
  'http://backus.pe/wordpress/wp-content/uploads/2015/10/cristal.jpg',
  'https://10reasonstheworldneedsmarketing.files.wordpress.com/2015/04/sku2903-4.gif'
];

export default class Banner extends Component {
  render() {
    return (
      <StyleBanner>
        <Swiper swiperOptions={params} navigation={false} pagination={false}>
          {data.map(item => (
            <Slide key={item}>
              <div className="row">
                <div
                  className="wrap"
                  style={{ backgroundImage: `url(${item})` }}
                >
                  <img src={item} alt="data" style={{ maxWidth: '100%' }} />
                </div>
              </div>
            </Slide>
          ))}
        </Swiper>
      </StyleBanner>
    );
  }
}

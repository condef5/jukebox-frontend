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
  'https://www.designformusic.com/wp-content/uploads/2018/05/Anon-OST-500x500.jpg',
];

const videos = [
  'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
  'https://youtu.be/B0cVKmkYamU',
  'https://www.youtube.com/watch?v=Z8cmSEXOE0g',
  'https://www.youtube.com/watch?v=NQcqYEN_Bh0',
  'https://www.youtube.com/watch?v=b2f5kIZ9YuM',
  'https://www.youtube.com/watch?v=VtM2fspH3CE'
];

class Carrousel extends Component {
  state = {
    presenting: false
  };

  openMusic = () => {
    const { presenting } = this.state;
    const suffix = presenting ? '' : '?manage';
    const originalLocation = 'http://localhost:3000';
    if (presenting === false && window.PresentationRequest) {
      const presentationRequest = new PresentationRequest([`${originalLocation}`]);
      navigator.presentation.defaultRequest = presentationRequest;
      presentationRequest.start().then(connection => {
        console.log('ready');
        this.setState({ presenting: true });
        connection.addEventListener('message', data => {
          console.log(data);
        });
      });
    } else {
      console.log('change video...');
      localStorage.setItem('video', videos[Math.floor(Math.random() * videos.length)]);
    }
  };

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
            <div className="contain" onClick={this.openMusic}>
              <img className="img-responsive" src={item} alt="title or description" />
            </div>
          ))}
        </Swiper>
      </StyleSwipper>
    );
  }
}

export default Carrousel;

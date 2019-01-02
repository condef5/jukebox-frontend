import styled from 'styled-components';

const Banner = styled.div`
  max-width: 100%;
  max-height: 100px;
  position: relative;
  img {
    display: none;
  }

  .row {
    height: 100px;
  }

  .swiper-slide {
    padding: 0.5em;
  }

  .wrap {
    background-size: cover;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    box-shadow: rgb(255, 0, 0) 2px 2px 5px, rgb(255, 0, 0) -2px -2px 5px,
      rgb(255, 0, 0) -2px 2px 5px, rgb(255, 0, 0) 2px -2px 5px;
    background-position: center;
  }
`;

export default Banner;

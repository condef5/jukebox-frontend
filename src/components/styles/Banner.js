import styled from 'styled-components';

const Banner = styled.div`
  max-width: 100%;
  margin: 0.5em 0;

  img {
    display: none;
  }

  .row {
    height: 150px;
  }

  .swiper-slide {
    padding: 0.5em;
  }

  .wrap {
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: rgb(255, 0, 0) 2px 2px 5px, rgb(255, 0, 0) -2px -2px 5px,
      rgb(255, 0, 0) -2px 2px 5px, rgb(255, 0, 0) 2px -2px 5px;
  }
`;

export default Banner;

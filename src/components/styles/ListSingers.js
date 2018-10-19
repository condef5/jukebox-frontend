import styled from 'styled-components';

const StyleSwipper = styled.div`
  .contain {
    text-align: center;
    border-radius: 5px;
  }
  .img-responsive {
    box-shadow: 1px 1px 15px rgba(255, 0, 0, 0.61),
      -1px -1px 15px rgba(255, 0, 0, 0.61), -1px 1px 15px rgba(255, 0, 0, 0.61),
      1px -1px 15px rgba(255, 0, 0, 0.61);
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

export default StyleSwipper;

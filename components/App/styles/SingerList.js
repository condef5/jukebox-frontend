import styled from 'styled-components';

const sizeImage = '290px';

const StyleSwipper = styled.div`
  margin: 30px 0;
  height: 320px;

  &.loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .column {
    border-radius: 5px;
    position: relative;
    width: ${sizeImage};
  }

  .column::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .swiper-slide:nth-child(3n + 1) .column {
    background: #00ff36;
    transition: all 0.3s;
    &::after {
      background-color: #23278a;
      mix-blend-mode: lighten;
      transition: all 0.3s;
    }
    img {
      filter: grayscale(100%) contrast(1);
      mix-blend-mode: multiply;
      transition: all 0.3s;
    }
  }

  .swiper-slide:nth-child(3n + 2) .column {
    background: #f4d6db;
    background-color: #e50914;
    &::after {
      background: linear-gradient(to top left, #75d775, #321a5b);
      mix-blend-mode: lighten;
      filter: contrast(1.1);
    }
    img {
      mix-blend-mode: lighten;
      filter: grayscale(100%) contrast(1.2);
      opacity: 0.8;
    }
  }

  .swiper-slide:nth-child(3n + 3) .column {
    background: blue;
    &::after {
      background-color: #4abac3;
      mix-blend-mode: multiply;
    }
    img {
      filter: grayscale(100%) contrast(0.8);
      mix-blend-mode: lighten;
    }
  }

  .swiper-slide-active {
    cursor: pointer;
    .column {
      background: none;
      &::after {
        display: none;
      }
      img {
        filter: none !important;
        mix-blend-mode: initial !important;
        opacity: 1 !important;
      }
    }
  }

  .contain {
    text-align: center;
    border-radius: 5px;
  }

  .img-responsive {
    height: ${sizeImage};
    width: ${sizeImage};
    object-fit: cover;
    border-radius: 5px;
    /* animation: change-image 4s ease-in-out infinite; */
  }

  /* container slider */
  .swiper-container {
    width: 100%;
    margin: 0 auto;
  }
`;

export default StyleSwipper;

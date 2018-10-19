import styled from 'styled-components';

const widthItem = '100px';
const heightItem = '35px';

const StyleSwipper = styled.div`
  .contain {
    text-align: center;
    border-radius: 5px;
  }

  /* container slider */
  .swiper-container {
    width: 400px;
    margin: 0 auto;
  }
`;

const StyleGenders = styled.div`
  background-color: rgba(255, 9, 9, 0.85);
  width: ${widthItem};
  height: ${heightItem};
  font-size: 14px;
  padding: 0.5em 1.5em;
  font-weight: 100;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  user-select: none;
  text-align: center;
  color: #fff;
  opacity: 0.95;
  box-shadow: 1px 1px 20px rgba(255,0,0,0.61), -1px -1px 20px rgba(255,0,0,0.61);
  border-radius: 4px;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export { StyleSwipper, StyleGenders };

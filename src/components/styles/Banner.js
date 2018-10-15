import styled from 'styled-components';

const Banner = styled.div`
  padding: 0.5em;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px #ff0000, -2px -2px 5px #ff0000, -2px 2px 5px #ff0000,
    2px -2px 5px #ff0000;
  h3 {
    text-transform: uppercase;
    text-align: center;
    font-size: 48px;
    margin: 0;
    -webkit-text-stroke: 1px #ef1a1c;
    letter-spacing: 3px;
    color: #ffe100;
    text-shadow: 3px 3px 0 #ef1a1c, -1px -1px 0 #ef1a1c, 1px -1px 0 #ef1a1c,
      -1px 1px 0 #ef1a1c, 1px 1px 0 #ef1a1c;
  }
`;

export default Banner;

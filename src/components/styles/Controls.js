import styled from 'styled-components';

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 40px;
  }
  .credits {
    color: #fff;
    border-radius: 50%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    height: 110px;
    width: 110px;
    align-items: center;
    border: 3px solid #fff;

    -webkit-text-stroke: 1px #ef1a1c;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 4px #ef1a1cad, -1px -1px 4px #ef1a1cad;
    div:first-child {
      font-size: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-top: 15px;
    }
    div:last-child {
      font-size: 45px;
      letter-spacing: 5px;
    }
  }
`;

export default Controls;

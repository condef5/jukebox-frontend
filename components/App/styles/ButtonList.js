import styled from 'styled-components';

const ButtonList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 50px;
  padding: 0 1em;
  button {
    border: none;
    outline: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.25px;
    font-size: 12px;
    padding: 0.35em 0.75em;
    line-height: 20px;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: rgb(107, 107, 107);
    cursor: pointer;
    text-transform: uppercase;
    user-select: none;
    font-weight: 100;
  }
  span {
    padding-left: 3px;
  }
  svg {
    width: 20px;
  }
`;

export default ButtonList;

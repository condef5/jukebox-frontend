import styled from 'styled-components';

const Button = styled.button`
  font-family: inherit;
  border: none;
  outline: none;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  font-weight: 100;
  display: inline-flex;
  width: 200px;
  letter-spacing: 0.25px;
  font-size: 12px;
  padding: 0.35em 1.25em;
  border-radius: 4px;
  color: #fff;
  background-color: rgb(0, 0, 0);
  b {
    display: inline-block;
    z-index: 100;
    font-weight: 500;
    position: relative;
  }
`;

export default Button;

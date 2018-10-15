import styled from 'styled-components';

const Genre = styled.div`
  position: absolute;
  background-color: ${props =>
    props.active ? 'rgba(255, 9, 9, 1)' : 'rgba(255, 9, 9, 1)'};
  width: 150px;
  height: 40px;
  font-size: 14px;
  padding: 0.5em 1.5em;
  font-weight: 100;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  user-select: none;
  text-align: center;
  color: #fff;
  opacity: 0.95;
  box-shadow: 0 0 15px #ff2b2b78;
  border-radius: 4px;
  transform: rotateY(${props => props.size * 60}deg) translateZ(100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Genre;

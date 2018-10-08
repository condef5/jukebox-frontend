import styled from 'styled-components';

const Genre = styled.div`
  box-shadow: 0 0 15px #ff2b2b78;
  border-radius: 4px;
  background-color: ${props =>
    props.active ? 'rgba(255, 9, 9, 0.87)' : 'rgba(255, 9, 9, 0.4)'};
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 0.35px;
  padding: 0.5em 1.5em;
  text-transform: uppercase;
  user-select: none;
  margin-top: 1em;
`;

export default Genre;

import styled from 'styled-components';

export const Tab = styled.div`
  background-color: #ef1a1c;
  border-radius: 4px;
  box-shadow: 0 0 15px #ff2b2b78;
  margin: 1em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.35em 0.5em;
  text-transform: uppercase;
  font-size: 14px;
  & > div {
    border-right: 1px solid #fff;
    padding-right: 5px;
    &:last-child {
      border: none;
    }
  }
`;

export const MusicContainer = styled.div`
  display: block;
  padding-left: 7px;
  & > div {
    color: #ef1a1c;
  }
`;
